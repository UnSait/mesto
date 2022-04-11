export class Card {
  constructor(data, cardSelectorTemplate, handleCardClick, handleCardDelete, handleCardLike) {
    this._cardTemplate = document.querySelector(cardSelectorTemplate).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  };

  _addListener() {
    this._likeButton.addEventListener('click', this._handleCardLike);
    this._deleteButton.addEventListener('click', () => {this._handleCardDelete()});
    this._cardImage.addEventListener('click', this._handleCardClick);

  };

  removeCard() {
    this._newCard.remove();
  };

  isLiked() {
    const cardLiked = this._likes.find(user => user._id === this._userId);

    return cardLiked
  }

  likeCard() {
    this._likeButton.classList.add('elements__element-button_active');
  };

  deletelikeCard() {
    this._likeButton.classList.remove('elements__element-button_active');
  };

  countLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._newCard.querySelector('.elements__element-like-count');
    likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this.likeCard()
    };
  };

  createCard() {
    this._newCard = this._cardTemplate.querySelector('.elements__element-group').cloneNode(true);
    this._cardImage = this._newCard.querySelector('.elements__element-photo');
    this._deleteButton = this._newCard.querySelector('.elements__element-trash');
    this._likeButton = this._newCard.querySelector('.elements__element-button');
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._newCard.querySelector('.elements__element-name').textContent = this._name;
    this.countLikes(this._likes);
    this._addListener(this._newCard);

    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    };




    return this._newCard;
  };

};
