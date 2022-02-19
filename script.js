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
const template = document.querySelector('#template').content;
const generalHandler = document.querySelector('.body');

const popupProfile = document.querySelector('.popup');
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

const popupFullScreen = document.querySelector('.popup_full-Screen');
const popupFullScreenName = document.querySelector('.popup__place-name');
const popupFullScreenPhoto = document.querySelector('.popup__place-photo');
const popupFullScreenCloseButton = popupFullScreen.querySelector('.popup__exite_full-Screen');

//Добавление карточек из «Коробки»

initialCards.forEach(renderCards);

//Функции

  //Функция добавления карточек из «Коробки»

  function renderCards(item) {
    const newCard = createCard(item.name, item.link);
    addCard(cardsSection, newCard);
  }

  // Функция создания новой карточки

  function createCard(cardName, cardLink) {
    const newCard = template.cloneNode(true);
    newCard.querySelector('.elements__element-photo').src = cardLink;
    newCard.querySelector('.elements__element-photo').alt = cardName;
    newCard.querySelector('.elements__element-name').textContent = cardName;
    addListener(newCard);
    return newCard;
  };

  //Функция добавления новой карточки

  function addCard(container, cardElement) {
    container.prepend(cardElement);
  };

  //Функция открытия попапов

  function openPopup(popupName) {
    popupName.classList.add('popup_active');
    generalHandler.addEventListener('keydown', closeByESC);
    generalHandler.addEventListener('click', closeByClick);
  };

  //Функции закрытия попапов

  function closePopup(popupName) {
    popupName.classList.remove('popup_active');
    generalHandler.removeEventListener('keydown', closeByESC);
    generalHandler.removeEventListener('click', closeByClick);
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
  };

  //Функция появления "попап добавления карточек"

  function openPopupСard() {
    popupСardInputName.value = '';
    popupСardInputPhoto.value = '';
    openPopup(popupСard);
  };

  //Функция появления "попап маштабирования фотографий карточек"

  function scaleCard(evt) {
    popupFullScreenPhoto.src = evt.target.src;
    popupFullScreenPhoto.alt = evt.target.alt;
    popupFullScreenName.textContent = evt.target.closest(".elements__element-group").querySelector('.elements__element-name').textContent;
    openPopup(popupFullScreen);
  };

  //Функция обработчика "попап профиль"

  function handleProfileSumbit(evt) {
    evt.preventDefault();
    popupProfileNameProfile.textContent = popupProfileInputName.value;
    popupProfileStatusProfile.textContent = popupProfileInputStatus.value;
    closePopup(popupProfile);
    popupProfileSumbitButton.setAttribute('disabled', true);
    popupProfileSumbitButton.classList.add('popup__sumbit_inactive')
  };

  //Функция обработчика "попап добавления карточек"

  function handleCardSumbit(evt) {
    evt.preventDefault();
    const newCard = createCard(popupСardInputName.value, popupСardInputPhoto.value);
    addCard(cardsSection, newCard);
    closePopup(popupСard);
    popupСardSumbitButton.setAttribute('disabled', true);
    popupСardSumbitButton.classList.add('popup__sumbit_inactive')
  };

  //Функция "Лайк"

  function likeCard (evt) {
    evt.target.classList.toggle('elements__element-button_active');
  };

  //Функция "Удаление"

  function removeCard (evt) {
    evt.target.closest('.elements__element-group').remove();
  };

  //Функция слушателя таргетных функций

  function addListener (el) {
    el.querySelector('.elements__element-button').addEventListener('click', likeCard);
    el.querySelector('.elements__element-trash').addEventListener('click', removeCard);
    el.querySelector('.elements__element-photo').addEventListener('click', scaleCard);
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
