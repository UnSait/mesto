// Импортируемые модули
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {popupProfileOpenButton, popupProfileInputName, popupProfileInputStatus, popupProfileFormProfile, popupСardOpenButton, popupСardFormProfile, popupAvatarFormProfile, popupAvatarOpenButton, validationConfig} from '../utils/constants.js';
import "./index.css";

const profileForm = new FormValidator(validationConfig, popupProfileFormProfile);
const cardForm = new FormValidator(validationConfig, popupСardFormProfile);
const avatarForm = new FormValidator(validationConfig, popupAvatarFormProfile);

const popupWithImage = new PopupWithImage('.popup_full-Screen');
const popupWithFormProfile = new PopupWithForm('.popup-profile', handleProfileSumbit);
const popupDelete = new PopupWithForm('.popup-delete');
const popupAvatar = new PopupWithForm('.popup-avatar', handleAvatarSumbit);
const popupWithFormCards = new PopupWithForm('.popup-addCard', handleCardSumbit);
const userInfo = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__status', avatarSelector: '.profile__avatar'});
const section = new Section(generateCard,'.elements__element');
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '15f04902-1b2a-4e7f-8af1-0eff204991b7',
    'Content-Type': 'application/json'
  }
});

const dataUser = api.getProfile(); //Я сделал это, потому что не могу получить id профиля по другому.
                                   //Пришлось поэтому переписывать код под эту переменную. Помогите пожалуйста, уже глаза на лоб лезут одно и тоже по несколько раз переписывать :(
//let userId; (undefined)


//Загрузка данных с сервера

Promise.all([api.getProfile(), api.getInitialCards()])
  .then((res) => {
    userInfo.setUserInfo(res[0]);
    userInfo.setUserAvatar(res[0]);
    section.rendererItems(res[1]);
    //userId = res[0]._id;
  })
  .catch(err => console.log("Не удалось загрузить:", err));

//Функции

  //Функция создания карточек

  function generateCard(item) {
    const card = new Card(item, '#template',

      () => {
      popupWithImage.open(item.link, item.name)},

      () => {
        popupDelete.open();
        popupDelete.changeHandler(() => {
          popupDelete.renderLoading('Удаление...');
          api.deleteCard(item._id)
          .then(() => {
            popupDelete.close();
            card.removeCard();
          })
          .catch(err => console.log("Не удалось загрузить:", err))
          .finally(() => {
            popupDelete.renderLoading('Да');
          });
        });
      },

      dataUser, addLikeCard, deletelikeCard);
      return card.createCard();
  };

  //Функция обработчика "попап профиль"

  function handleProfileSumbit(data) {
    popupWithFormProfile.renderLoading('Сохранение...');
    api.editProfile(data['input-name'], data['input-status'])
      .then ((res) => {
        userInfo.setUserInfo(res);
      })
      .then(() => {
        popupWithFormProfile.close();
      })
      .catch(err => console.log("Не удалось загрузить:", err))
      .finally(() => {
        popupWithFormProfile.renderLoading('Сохранить');
      });
  };

  //Функция обработчика "попап добавления карточек"

  function handleCardSumbit(data) {
    popupWithFormCards.renderLoading('Cохранение...');
    api.addCard(data['input-nameCard'], data['input-cardPlace'])
    .then(res => {
      section.addItem(generateCard(res));
    })
    .then(() => {
      popupWithFormCards.close();
    })
    .catch(err => console.log("Не удалось загрузить:", err))
    .finally(() => {
      popupWithFormCards.renderLoading('Создать');
    });
  };

  //Функция обработчика "попап изменения аватара"

  function handleAvatarSumbit(data) {
    popupAvatar.renderLoading('Cохранение...');
    api.getAvatar(data['input-linkAvatar'])
    .then(res => {
      userInfo.setUserAvatar(res);
    })
    .then(() => {
      popupAvatar.close();
    })
    .catch(err => console.log("Не удалось загрузить:", err))
    .finally(() => {
      popupAvatar.renderLoading('Сохранить');
    });
  };

  // Функии лайка карточек

  function addLikeCard(cardId) {
    return api.addLikeCard(cardId);
  };

  function deletelikeCard(cardId) {
    return api.deleteLikeCard(cardId);
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


popupAvatarOpenButton.addEventListener('click', () => {
  avatarForm.resetValidation();
  popupAvatar.open();
});

profileForm.enableValidation();
cardForm.enableValidation();
avatarForm.enableValidation();
