const objectForm = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveSubmitButtonClass: 'form__button-save_inactive',
};

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
};

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    };
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement, obj) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(obj.inactiveSubmitButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(obj.inactiveSubmitButtonClass);
        buttonElement.removeAttribute('disabled', true);
    };
};

function setEventListeners(formElement, obj) {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, objectForm);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement, objectForm);
        });
    });
};

function enableValidation(obj) {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, objectForm);
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
    });
};

enableValidation(objectForm);






























