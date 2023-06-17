import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._formElement = this._popup.querySelector('.form');
        this._formInputList = this._formElement.querySelectorAll('.form__input');
        this._submitButton = this._formElement.querySelector('.form__button-save');
        this._submitButtonDefaultText = this._submitButton.textContent;
    };

    close() {
        super.close();
        this._formElement.reset();
    };

    _getInputValues() {
        const inputValues = {};
        this._formInputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    };

    resetTextSubmitButton() {
        this._submitButton.textContent = this._submitButtonDefaultText;
    }

    setInputValues(userInfoFromPage) {
        this._formInputList.forEach(input => {
            input.value = userInfoFromPage[input.name];
        });
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitButton.textContent = 'Сохранение...'
            this._formSubmit(this._getInputValues());
        });
    };
}