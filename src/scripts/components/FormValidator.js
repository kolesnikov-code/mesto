export default class FormValidator {
    constructor(formConfig, form){
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(formConfig.inputSelector));
        this._buttonElement = this._form.querySelector(formConfig.submitButtonSelector);
        this._inactiveButtonClass = formConfig.inactiveSubmitButtonClass;
    };

    resetSubmitButton() {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
    };

    _showInputError(inputElement) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        this._errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add('form__input_invalid');
    };
    
    _hideInputError(inputElement) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        this._errorElement.textContent = '';
        inputElement.classList.remove('form__input_invalid');
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        };
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.resetSubmitButton();
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled', true);
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

    enableValidation() {
        this._setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    };
};
