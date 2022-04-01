export class Card {
  constructor(data, cardSelectorTemplate, handleCardClick) {
    this._cardTemplate = document.querySelector(cardSelectorTemplate).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick
  };

  _addListener(el) {
    el.querySelector('.elements__element-button').addEventListener('click', this._likeCard);
    el.querySelector('.elements__element-trash').addEventListener('click', this._removeCard);
    this._cardImage.addEventListener('click', this._handleCardClick);
  };

  _removeCard(evt) {
    evt.target.closest('.elements__element-group').remove();
  };

  _likeCard(evt) {
    evt.target.classList.toggle('elements__element-button_active');
  };

  createCard() {
    this._newCard = this._cardTemplate.cloneNode(true);
    this._cardImage = this._newCard.querySelector('.elements__element-photo');
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._newCard.querySelector('.elements__element-name').textContent = this._name;
    this._addListener(this._newCard);
    return this._newCard;
  };

};
