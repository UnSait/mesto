import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSumbit) {
    super(popupSelector);
    this._handleSumbit = handleSumbit;
    this._submitForm = this._submitForm.bind(this);
    this._form = this._popup.querySelector('.popup__form');
  };

  _getInputValues() {
    const inputsForm = [...this._form.querySelectorAll('.popup__input')]
    const values = {};
    inputsForm.forEach(input => {
      values[input.name] = input.value
    });

    return values;
  };

  _submitForm() {
    this._handleSumbit(this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  };

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._submitForm);
  };

};
