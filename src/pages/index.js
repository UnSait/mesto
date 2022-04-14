// Импортируемые модули
import {Card} from '../components/Card.js';
import {popupProfileOpenButton, popupProfileInputName, popupProfileInputStatus, popupСardOpenButton, popupAvatarOpenButton, profileForm, cardForm, avatarForm, popupWithImage, popupWithFormProfile, popupDelete, popupAvatar, popupWithFormCards, userInfo, section, api, dataUser} from '../blocks/utils/constants.js';
import "./index.css";

//Загрузка данных с сервера

Promise.all([api.getProfile(), api.getInitialCards()])
  .then((res) => {
    userInfo.setUserInfo(res[0]);
    userInfo.setUserAvatar(res[0]);
    section.rendererItems(res[1]);
  })
  .catch(err => console.log("Не удалось загрузить:", err));

//Функции

  //Функция создания карточек

  export function generateCard(item) {
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

  export function handleProfileSumbit(data) {
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

  export function handleCardSumbit(data) {
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

  export function handleAvatarSumbit(data) {
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
