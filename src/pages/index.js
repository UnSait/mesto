// Импортируемые модули

import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

import "./index.css";

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


const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileInputName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileInputStatus = popupProfile.querySelector('.popup__input_type_stasus');
const popupProfileFormProfile = popupProfile.querySelector('.popup__form');
const popupСard = document.querySelector('.popup-addCard');
const popupСardOpenButton = document.querySelector('.profile__add-button');
const popupСardFormProfile = popupСard.querySelector('.popup__form-addCard');

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
const section = new Section({
  items: initialCards,
  renderer: generateCard,
}, '.elements__element');

const popupWithImage = new PopupWithImage('.popup_full-Screen');
const popupWithFormProfile = new PopupWithForm('.popup-profile', handleProfileSumbit);
const popupWithFormCards = new PopupWithForm('.popup-addCard', handleCardSumbit);
const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status'})

profileForm.enableValidation();
cardForm.enableValidation();

//Добавление карточек из «Коробки»

section.rendererItems();

//Функции

  //Функция создания карточек

  function generateCard(item) {
    return new Card(item, '#template', () => {
      popupWithImage.open(item.link, item.name)}).createCard();
  };

  //Функция обработчика "попап профиль"

  function handleProfileSumbit(data) {
    userInfo.setUserInfo(data['input-name'], data['input-status'])
    popupWithFormProfile.close();
  };

  //Функция обработчика "попап добавления карточек"

  function handleCardSumbit(data) {
    const newCard = {name: data['input-nameCard'], link: data['input-cardPlace']};
    section.addItem(generateCard(newCard));
    popupWithFormCards.close();
  };

//Слушатели

popupProfileOpenButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  popupProfileInputName.value = data.userName;
  popupProfileInputStatus.value = data.userInfo;
  profileForm.resetValidation();
  popupWithFormProfile.open();
});

popupСardOpenButton.addEventListener('click', () => {
  cardForm.resetValidation();
  popupWithFormCards.open();
});
