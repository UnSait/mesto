export class Card {
  constructor(data, cardSelectorTemplate, handleCardClick, handleCardDelete, userInfo, likeCard, dislikeCard) {
    this._cardTemplate = document.querySelector(cardSelectorTemplate).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._userInfo = userInfo;
    this._addLike = likeCard;
    this._dislike = dislikeCard;
  };

  _addListener() {
    this._likeButton.addEventListener('click', (evt) => this._like(evt));
    this._deleteButton.addEventListener('click', () => {this._handleCardDelete()});
    this._cardImage.addEventListener('click', this._handleCardClick);
  };

  removeCard() {
    this._newCard.remove();
  };

  _removeDeleteButton() {
    this._userInfo
    .then(res => {
        if (res._id !== this._ownerId) {
            this._deleteButton.remove()
        };
   });
  };

  _renderLikesInfo(newLikes) {
    this._likes = newLikes;
    this._likeCountElement.textContent = this._likes.length;
    this._userInfo
    .then(res => {
      this._likes.forEach(item => {
        if (item._id === res._id) {
          this._likeButton.classList.add('elements__element-button_active');
        };
      });
    });
  };

  _like(evt) {
    const cardLiked  = evt.target.classList.contains('elements__element-button_active');
    if (!cardLiked) {
        this._addLike(this._cardId)
        .then(res => {
          this._likeCountElement.textContent = res.likes.length;
          evt.target.classList.add('elements__element-button_active');
          })
        .catch(err => console.log("Не удалось выполнить:", err));
    } else {
        this._dislike(this._cardId)
        .then(res => {
          this._likeCountElement.textContent = res.likes.length;
          evt.target.classList.remove('elements__element-button_active');
        })
        .catch(err => console.log("Не удалось выполнить:", err));
    };
  };

  createCard() {
    this._newCard = this._cardTemplate.querySelector('.elements__element-group').cloneNode(true);
    this._cardImage = this._newCard.querySelector('.elements__element-photo');
    this._deleteButton = this._newCard.querySelector('.elements__element-trash');
    this._likeButton = this._newCard.querySelector('.elements__element-button');
    this._likeCountElement = this._newCard.querySelector('.elements__element-like-count');
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._newCard.querySelector('.elements__element-name').textContent = this._name;

    this._addListener(this._newCard);
    this._renderLikesInfo(this._likes);
    this._removeDeleteButton();

    return this._newCard;
  };

};
