import {popupFullScreenPhoto, popupFullScreenName, popupFullScreen, openPopup} from './index.js';

export class Card {
  constructor(data, cardSelectorTemplate) {
    this._cardTemplate = document.querySelector(cardSelectorTemplate).content;
    this._name = data.name;
    this._link = data.link;
  };

  _addListener(el) {
    el.querySelector('.elements__element-button').addEventListener('click', this._likeCard);
    el.querySelector('.elements__element-trash').addEventListener('click', this._removeCard);
    el.querySelector('.elements__element-photo').addEventListener('click', this._scaleCard);
  };

  _removeCard(evt) {
    evt.target.closest('.elements__element-group').remove();
  };

  _likeCard(evt) {
    evt.target.classList.toggle('elements__element-button_active');
  };

  _scaleCard(evt) {
    popupFullScreenPhoto.src = evt.target.src;
    popupFullScreenPhoto.alt = evt.target.alt;
    popupFullScreenName.textContent = evt.target.closest(".elements__element-group").querySelector('.elements__element-name').textContent;
    openPopup(popupFullScreen);
  };

  createCard() {
    this._newCard = this._cardTemplate.cloneNode(true);
    this._newCard.querySelector('.elements__element-photo').alt = this._name;
    this._newCard.querySelector('.elements__element-name').textContent = this._name;
    this._newCard.querySelector('.elements__element-photo').src = this._link;
    this._addListener(this._newCard);
    return this._newCard;
  };

};
