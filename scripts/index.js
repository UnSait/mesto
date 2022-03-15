// Экспортируемые модули

import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

//Переменные
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];
const cardsSection = document.querySelector('.elements__element');
const body = document.querySelector('.body');

const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupProfile.querySelector('.popup__exite');
const popupProfileNameProfile = document.querySelector('.profile__name');
const popupProfileStatusProfile = document.querySelector('.profile__status');
const popupProfileInputName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileInputStatus = popupProfile.querySelector('.popup__input_type_stasus');
const popupProfileSumbitButton = popupProfile.querySelector('.popup__sumbit');
const popupProfileFormProfile = popupProfile.querySelector('.popup__form');

const popupСard = document.querySelector('.popup-addCard');
const popupСardOpenButton = document.querySelector('.profile__add-button');
const popupСardCloseButton = popupСard.querySelector('.popup__exite-addCard');
const popupСardInputName = popupСard.querySelector('.popup__input_type_nameCard');
const popupСardInputPhoto = popupСard.querySelector('.popup__input_type_photoCard');
const popupСardSumbitButton = popupСard.querySelector('.popup__sumbit-addCard');
const popupСardFormProfile = popupСard.querySelector('.popup__form-addCard');

export const popupFullScreen = document.querySelector('.popup_full-Screen');
export const popupFullScreenName = document.querySelector('.popup__place-name');
export const popupFullScreenPhoto = document.querySelector('.popup__place-photo');
export const popupFullScreenCloseButton = popupFullScreen.querySelector('.popup__exite_full-Screen');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumbit',
  inactiveButtonClass: 'popup__sumbit_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-text-error'
};

const profileForm = new FormValidator(validationConfig, popupProfileFormProfile);
const cardForm = new FormValidator(validationConfig, popupСardFormProfile);

profileForm.enableValidation();
cardForm.enableValidation();

//Добавление карточек из «Коробки»

initialCards.forEach(addCard);

//Функции

  //Функция создания карточек

  function generateCard(item) {
    return new Card(item, '#template').createCard();
  }

  //Функция добавления карточек

  function addCard(item) {
    cardsSection.prepend(generateCard(item));
  };

  //Функция открытия попапов

  export function openPopup(popupName) {
    popupName.classList.add('popup_active');
    body.addEventListener('keydown', closeByESC);
    body.addEventListener('mousedown', closeByClick);
  };

  //Функции закрытия попапов

  function closePopup(popupName) {
    popupName.classList.remove('popup_active');
    body.removeEventListener('keydown', closeByESC);
    body.removeEventListener('mousedown', closeByClick);
  };

  function closeByESC(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_active');
      closePopup(openedPopup);
    };
  };

  function closeByClick(evt) {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(evt.target);
    };
  };

  //Функция появления "попап профиль"

  function openPopupProfile() {
    popupProfileInputName.value = popupProfileNameProfile.textContent;
    popupProfileInputStatus.value = popupProfileStatusProfile.textContent;
    openPopup(popupProfile);
    profileForm.resetErrors();
  };

  //Функция появления "попап добавления карточек"

  function openPopupСard() {
    popupСardFormProfile.reset();
    openPopup(popupСard);
    cardForm.resetErrors();
  };

  //Функция обработчика "попап профиль"

  function handleProfileSumbit(evt) {
    evt.preventDefault();
    popupProfileNameProfile.textContent = popupProfileInputName.value;
    popupProfileStatusProfile.textContent = popupProfileInputStatus.value;
    closePopup(popupProfile);
    profileForm.inactiveButton(popupProfileSumbitButton);
  };

  //Функция обработчика "попап добавления карточек"

  function handleCardSumbit(evt) {
    evt.preventDefault();
    const newCard = {name: popupСardInputName.value, link: popupСardInputPhoto.value};
    addCard(newCard);
    closePopup(popupСard);
    cardForm.inactiveButton(popupСardSumbitButton);
  };

//Слушатели

popupProfileOpenButton.addEventListener('click', openPopupProfile);
popupСardOpenButton.addEventListener('click', openPopupСard);

popupProfileCloseButton.addEventListener('click', function () {
  closePopup(popupProfile);
});
popupСardCloseButton.addEventListener('click', function () {
  closePopup(popupСard);
});
popupFullScreenCloseButton.addEventListener('click', function () {
  closePopup(popupFullScreen);
});

popupProfileFormProfile.addEventListener('submit',  handleProfileSumbit);
popupСardFormProfile.addEventListener('submit', handleCardSumbit);
