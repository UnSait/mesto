let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__exite');
let popupActive = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile__name');
let statusProfile = document.querySelector('.profile__status');
let inputName = document.querySelector('.popup__input_type_name');
let inputStatus = document.querySelector('.popup__input_type_stasus');
let sumbitBottom = document.querySelector('.popup__sumbit');
let formProfile = document.querySelector('.popup__form');

function popupOpen() {
  popupActive.classList.toggle('popup_click_active');
};

function popupClose() {
  popupActive.classList.toggle('popup_click_active');
};

function profileSumbitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = `${inputName.value}`;
  statusProfile.textContent = `${inputStatus.value}`;
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
sumbitBottom.addEventListener('click', popupClose);
formProfile.addEventListener('submit', profileSumbitHandler);
