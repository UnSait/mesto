export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState( ) {
    if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    } else {
        this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    };
  };

  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
  };


  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    };
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
    });
  };

  resetErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  };

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

};
