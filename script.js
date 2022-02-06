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

// Добавление карточек из «Коробки»
const list = document.querySelector('.elements__element');
const template = document.querySelector('#template').content;

function render() {
  initialCards.forEach(renderItem);
}

function renderItem(item) {
  const newItem = template.cloneNode(true);
  newItem.querySelector('.elements__element-photo').src = item.link;
  newItem.querySelector('.elements__element-name').innerText = item.name;
  addListener(newItem);
  list.prepend(newItem);
}

render();

//Попап профиль
let popupProfileOpenButton = document.querySelector('.profile__edit-button');
let popupProfileCloseButton = document.querySelector('.popup__exite');
let popupProfile = document.querySelector('.popup');
let popupProfileNameProfile = document.querySelector('.profile__name');
let popupProfileStatusProfile = document.querySelector('.profile__status');
let popupProfileInputName = document.querySelector('.popup__input_type_name');
let popupProfileInputStatus = document.querySelector('.popup__input_type_stasus');
let popupProfileSumbitButton = document.querySelector('.popup__sumbit');
let popupProfileFormProfile = document.querySelector('.popup__form');

function popupProfileOpen() {
  popupProfile.classList.toggle('popup_active');
  popupProfileInputName.value = popupProfileNameProfile.textContent;
  popupProfileInputStatus.value = popupProfileStatusProfile.textContent;
};

function popupProfileClose() {
  popupProfile.classList.toggle('popup_active');
};

function profileSumbitHandler(evt) {
  evt.preventDefault();
  popupProfileNameProfile.textContent = `${popupProfileInputName.value}`;
  popupProfileStatusProfile.textContent = `${popupProfileInputStatus.value}`;
  popupClose();
};

popupProfileOpenButton.addEventListener('click', popupProfileOpen);
popupProfileCloseButton.addEventListener('click', popupProfileClose);
popupProfileFormProfile.addEventListener('submit', profileSumbitHandler);

//Попап добавления карточек
let popupСardOpenButton = document.querySelector('.profile__add-button');
let popupСardCloseButton = document.querySelector('.popup__exite-addCard');
let popupСard = document.querySelector('.popup-addCard');
let popupСardName = document.querySelector('.elements__element-name');
let popupСardPhoto = document.querySelector('.elements__element-photo');
let popupСardInputName = document.querySelector('.popup__input_type_nameCard');
let popupСardInputPhoto = document.querySelector('.popup__input_type_photoCard');
let popupСardSumbitButton = document.querySelector('.popup__sumbit-addCard');
let popupСardFormProfile = document.querySelector('.popup__form-addCard');

function popupСardOpen() {
  popupСardInputName.value = '';
  popupСardInputPhoto.value = '';
  popupСard.classList.toggle('popup_active');
};

function popupСardClose() {
  popupСard.classList.toggle('popup_active');
};

function cardSumbitHandler(evt) {
  evt.preventDefault();
  const newItem = template.cloneNode(true);
  newItem.querySelector('.elements__element-name').innerText = `${popupСardInputName.value}`;
  newItem.querySelector('.elements__element-photo').src = `${popupСardInputPhoto.value}`;
  addListener(newItem);
  list.prepend(newItem);
  popupСardClose();

};

popupСardOpenButton.addEventListener('click', popupСardOpen);
popupСardCloseButton.addEventListener('click', popupСardClose);
popupСardFormProfile.addEventListener('submit', cardSumbitHandler);

//Попап маштабирования фотографий карточек
let popupFullScreen = document.querySelector('.popup_full-Screen');
let popupFullScreenCloseButton = document.querySelector('.popup__exite_full-Screen');

function popupFullScreenOpen() {
  popupFullScreen.classList.toggle('popup_active');
};

function popupFullScreenClose() {
  popupFullScreen.classList.toggle('popup_active');
};

popupFullScreenCloseButton.addEventListener('click', popupFullScreenClose);

//Лайк
function likeCard (evt) {
  evt.target.classList.toggle('elements__element-button_active');
};

//Удаление
function remove (evt) {
  evt.target.closest('.elements__element-group').remove();
};

//Маштабирование фотографий карточек
function scale(evt) {
  let popupFullScreenPhoto = document.querySelector('.popup__place-photo');
  let popupFullScreenName = document.querySelector('.popup__place-name');
  popupFullScreenPhoto.src = evt.target.src;
  popupFullScreenName.textContent = evt.target.parentNode.querySelector('.elements__element-name').textContent;
  popupFullScreenOpen();
};

//Слушатель таргетных функций
function addListener (el) {
  el.querySelector('.elements__element-button').addEventListener('click', likeCard);
  el.querySelector('.elements__element-trash').addEventListener('click', remove);
  el.querySelector('.elements__element-photo').addEventListener('click', scale);
};
