// Импортируемые модули

import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import "./index.css";

//Переменные
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileInputName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileInputStatus = popupProfile.querySelector('.popup__input_type_stasus');
const popupProfileFormProfile = popupProfile.querySelector('.popup__form');
const popupСard = document.querySelector('.popup-addCard');
const popupСardOpenButton = document.querySelector('.profile__add-button');
const popupСardFormProfile = popupСard.querySelector('.popup__form-addCard');
const imgAvatar = document.querySelector('.profile__avatar');
const popupAvatarFormProfile = document.querySelector('.popup__form-avatar');
const popupAvatarOpenButton = document.querySelector('.profile__avatar-btn');

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
const avatarForm = new FormValidator(validationConfig, popupAvatarFormProfile);

const popupWithImage = new PopupWithImage('.popup_full-Screen');
const popupWithFormProfile = new PopupWithForm('.popup-profile', handleProfileSumbit);
const popupDelete = new PopupWithForm('.popup-delete');
const popupAvatar = new PopupWithForm('.popup-avatar', handleAvatarSumbit);
const popupWithFormCards = new PopupWithForm('.popup-addCard', handleCardSumbit);
const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status'});
const section = new Section({items: [], renderer: generateCard},'.elements__element');

profileForm.enableValidation();
cardForm.enableValidation();
avatarForm.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '15f04902-1b2a-4e7f-8af1-0eff204991b7',
    'Content-Type': 'application/json'
  }
});

let userId;


api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about);
    imgAvatar.src = res.avatar;
    userId = res._id;
   });

api.getInitialCards()
  .then(res => {
    // const serverCards = new Section({items: res, renderer: generateCard},'.elements__element');
    // console.log(res[15].owner._id)
    // serverCards.rendererItems();
    res.forEach(data => {
      const newCard = {name: data.name, link: data.link, likes: data.likes, id: data._id, userId: userId, ownerId: data.owner._id};
      section.addItem(generateCard(newCard));
    });
  });


//Функции

  //Функция создания карточек

  function generateCard(item) {
    const card = new Card(item, '#template', () => {
      popupWithImage.open(item.link, item.name)},
      () => {
        popupDelete.open('Да');
        popupDelete.changeHandler(() => {
          popupDelete.omgUX('Удаление...');
          api.deleteCard(item.id)
          .then(() => {
            popupDelete.close();
            card.removeCard();
          })
        });
      },
      () => {
        if(card.isLiked()) {
          api.deleteLikeCard(item.id)
          .then((res) => {
            card.deletelikeCard();
            card.countLikes(res.likes);
          });
        } else {
          api.addLikeCard(item.id)
          .then((res) => {
            card.likeCard();
            card.countLikes(res.likes);
          });
        };
      });
      return card.createCard();
  };

  //Функция обработчика "попап профиль"

  function handleProfileSumbit(data) {
    popupWithFormCards.omgUX('Сохранение...');
    api.editProfile(data['input-name'], data['input-status'])
      .then (() => {
        userInfo.setUserInfo(data['input-name'], data['input-status']);
      })
      .then(() => {
        popupWithFormProfile.close();
      });
  };

  //Функция обработчика "попап добавления карточек"

  function handleCardSumbit(data) {
    popupWithFormCards.omgUX('Cохранение...');
    api.addCard(data['input-nameCard'], data['input-cardPlace'])
    .then(res => {
      const newCard = {name: res.name, link: res.link, likes: res.likes, id: res._id, userId: userId, ownerId: res.owner._id};
      section.addItem(generateCard(newCard));
    })
    .then(() => {
      popupWithFormCards.close();
    });
  };

  //Функция обработчика "попап изменения аватара"

  function handleAvatarSumbit(data) {
    popupAvatar.omgUX('Cохранение...');
    api.getAvatar(data['input-linkAvatar'])
    .then(res => {
      imgAvatar.src = res.avatar;
    })
    .then(() => {
      popupAvatar.close();
    });
  };

//Слушатели

popupProfileOpenButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  popupProfileInputName.value = data.userName;
  popupProfileInputStatus.value = data.userInfo;
  profileForm.resetValidation();
  popupWithFormProfile.open('Сохранить');
});

popupСardOpenButton.addEventListener('click', () => {
  cardForm.resetValidation();
  popupWithFormCards.open('Cоздать');
});


popupAvatarOpenButton.addEventListener('click', () => {
  avatarForm.resetValidation();
  popupAvatar.open('Сохранить');
});
