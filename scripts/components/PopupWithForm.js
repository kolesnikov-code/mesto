import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._formElement = this._popup.querySelector('.form');
        this._formInputList = this._formElement.querySelectorAll('.form__input');
    };

    close() {
        super.close();
        this._formElement.reset();
    };

    getInputValues() {
        this._inputValues = {};
        this._formInputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    setInputValues(userInfoFromPage) {
        this._formInputList.forEach(input => {
            input.value = userInfoFromPage[input.name];
        });
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._formSubmit);
    };
}