import {Section} from '../../components/Section.js';
import {PopupWithImage} from '../../components/PopupWithImage.js';
import {PopupWithForm} from '../../components/PopupWithForm.js';
import {UserInfo} from '../../components/UserInfo.js';
import {Api} from '../../components/Api.js';
import {FormValidator} from '../../components/FormValidator.js';
import {generateCard, handleProfileSumbit, handleCardSumbit, handleAvatarSumbit} from '../../pages/index.js';

//Переменные
export const popupProfile = document.querySelector('.popup-profile');
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const popupProfileInputName = popupProfile.querySelector('.popup__input_type_name');
export const popupProfileInputStatus = popupProfile.querySelector('.popup__input_type_stasus');
export const popupProfileFormProfile = popupProfile.querySelector('.popup__form');
export const popupСard = document.querySelector('.popup-addCard');
export const popupСardOpenButton = document.querySelector('.profile__add-button');
export const popupСardFormProfile = popupСard.querySelector('.popup__form-addCard');
export const imgAvatar = document.querySelector('.profile__avatar');
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

export const profileForm = new FormValidator(validationConfig, popupProfileFormProfile);
export const cardForm = new FormValidator(validationConfig, popupСardFormProfile);
export const avatarForm = new FormValidator(validationConfig, popupAvatarFormProfile);

export const popupWithImage = new PopupWithImage('.popup_full-Screen');
export const popupWithFormProfile = new PopupWithForm('.popup-profile', handleProfileSumbit);
export const popupDelete = new PopupWithForm('.popup-delete');
export const popupAvatar = new PopupWithForm('.popup-avatar', handleAvatarSumbit);
export const popupWithFormCards = new PopupWithForm('.popup-addCard', handleCardSumbit);
export const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status', avatarSelector: '.profile__avatar'});
export const section = new Section(generateCard,'.elements__element');
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '15f04902-1b2a-4e7f-8af1-0eff204991b7',
    'Content-Type': 'application/json'
  }
});

export const dataUser = api.getProfile();
