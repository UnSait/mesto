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
const cardList = document.querySelector('.elements__element');
const template = document.querySelector('#template').content;

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

initialCards.forEach(render);

//Функции

  //Функция добавления карточек из «Коробки»

  function render(item) {
    const newCard = createCard(item.name, item.link);
    addCard(cardList, newCard);
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

  function popupOpen (popupName) {
    popupName.classList.add('popup_active');
  };

  //Функция закрытия попапов

  function popupClose (popupName) {
    popupName.classList.remove('popup_active');
  };

  //Функция появления "попап профиль"

  function popupProfileOpen() {
    popupProfileInputName.value = popupProfileNameProfile.textContent;
    popupProfileInputStatus.value = popupProfileStatusProfile.textContent;
    popupOpen(popupProfile);
  };

  //Функция появления "попап добавления карточек"

  function popupСardOpen() {
    popupСardInputName.value = '';
    popupСardInputPhoto.value = '';
    popupOpen(popupСard);
  };

  //Функция появления "попап маштабирования фотографий карточек"

  function scaleCard(evt) {
    popupFullScreenPhoto.src = evt.target.src;
    popupFullScreenName.textContent = evt.target.parentElement.querySelector('.elements__element-name').textContent; //не получилось через closest, возвращает null, подскажите пожалуйста что делаю не так - evt.target.closest('.elements__element-name').textContent
    popupOpen(popupFullScreen);
  };

  //Функция обработчика "попап профиль"

  function sumbitHandlerProfile(evt) {
    evt.preventDefault();
    popupProfileNameProfile.textContent = popupProfileInputName.value;
    popupProfileStatusProfile.textContent = popupProfileInputStatus.value;
    popupClose(popupProfile);
  };

  //Функция обработчика "попап добавления карточек"

  function sumbitHandlerCard(evt) {
    evt.preventDefault();
    const newCard = createCard(popupСardInputName.value, popupСardInputPhoto.value);
    addCard(cardList, newCard);
    popupClose(popupСard);
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

popupProfileOpenButton.addEventListener('click', popupProfileOpen);
popupСardOpenButton.addEventListener('click', popupСardOpen);
popupProfileCloseButton.addEventListener('click', function () {
  popupClose(popupProfile);
});
popupСardCloseButton.addEventListener('click', function () {
  popupClose(popupСard);
});
popupFullScreenCloseButton.addEventListener('click', function () {
  popupClose(popupFullScreen);
});
popupProfileFormProfile.addEventListener('submit', sumbitHandlerProfile);
popupСardFormProfile.addEventListener('submit', sumbitHandlerCard);
