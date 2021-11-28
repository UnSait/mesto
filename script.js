let popup_open = document.querySelector('.profile__edit-button');
let popup_active = document.querySelector('.popup-background');
let popup_close = document.querySelector('.popup__exite');
let name_profile = document.querySelector('.profile__name');
let status_profile = document.querySelector('.profile__status');
let input_name = document.querySelector('.popup__name');
let input_status = document.querySelector('.popup__status');
let save = document.querySelector('.popup__save');

popup_open.addEventListener('click', function () {
  popup_active.classList.toggle('popup-background__click_active');
});

popup_close.addEventListener('click', function () {
  popup_active.classList.toggle('popup-background__click_active');
});

save.addEventListener('click', function () {
  name_profile.textContent = `${input_name.value}`;
  status_profile.textContent = `${input_status.value}`;
});
