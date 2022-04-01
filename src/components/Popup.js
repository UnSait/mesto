export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
  };

  open() {
    this._popup.classList.add('popup_active');
    this.setEventListeners()
  };

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleClickClose);
  };

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleClickClose);
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  _handleClickClose(evt) {
    const closeButton = evt.target.classList.contains('popup__exite');
    const closeArea = evt.target.classList.contains('popup_active');

    if (closeButton || closeArea) {
      this.close();
    };
  };

};
