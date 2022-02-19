//Функции

  // Функция "Добавление сообщения об ошибке"

  function showError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  // Функция "Скрытие сообщения об ошибке"

  function hideError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };

  // Функция "Проверка валидности формы для добавления или скрытия сообщения об ошибке"

  function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideError(formElement, inputElement, inputErrorClass, errorClass);
    };
  };

  // Функция "Проверка валидности всех полей формы"

  function hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  //Функция, добавляющая слушателя событий всем полям ввода внутри формы

  function setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
          toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
  };

  //Функция "Поиск форм и добавление им обработчиков"

  const enableValidation = (el) => {
    const formList = Array.from(document.querySelectorAll(el.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, el.inputSelector, el.submitButtonSelector, el.inactiveButtonClass, el.inputErrorClass, el.errorClass);
    });
  };

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__sumbit',
    inactiveButtonClass: 'popup__sumbit_inactive',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-text-error'
  });

  // Функция "Изменение эффектов кнопки"

  function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
  };
