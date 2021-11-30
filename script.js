let popup_open = document.querySelector('.profile__edit-button');
let popup_active = document.querySelector('.popup');
let popup_close = document.querySelector('.popup-container__exite');
let name_profile = document.querySelector('.profile__name');
let status_profile = document.querySelector('.profile__status');
let input_name = document.querySelector('.popup-container__name');
let input_status = document.querySelector('.popup-container__status');
let save = document.querySelector('.popup-container__save');

popup_open.addEventListener('click', function () {
  popup_active.classList.toggle('popup__click_active');
});

popup_close.addEventListener('click', function () {
  popup_active.classList.toggle('popup__click_active');
});

save.addEventListener('click', function () {
  name_profile.textContent = `${input_name.value}`;
  status_profile.textContent = `${input_status.value}`;
  popup_active.classList.toggle('popup__click_active');
});
