//Переменные
export const popupProfile = document.querySelector('.popup-profile');
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const popupProfileInputName = popupProfile.querySelector('.popup__input_type_name');
export const popupProfileInputStatus = popupProfile.querySelector('.popup__input_type_stasus');
export const popupProfileFormProfile = popupProfile.querySelector('.popup__form');
export const popupСard = document.querySelector('.popup-addCard');
export const popupСardOpenButton = document.querySelector('.profile__add-button');
export const popupСardFormProfile = popupСard.querySelector('.popup__form-addCard');
export const popupAvatarFormProfile = document.querySelector('.popup__form-avatar');
export const popupAvatarOpenButton = document.querySelector('.profile__avatar-btn');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumbit',
  inactiveButtonClass: 'popup__sumbit_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-text-error'
};
