import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._formElement = this._popup.querySelector('.form');
        this._formInputList = this._formElement.querySelectorAll('.form__input');
        this._submitButton = this._formElement.querySelector('.form__button-save');
        this._submitButtonDefaultText = this._submitButton.textContent;
        this._loadingText = 'Сохранение...'
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

    _renderLoading() {
        this._submitButton.textContent = 'Сохранение...';
    };

    resetTextSubmitButton() {
        this._submitButton.textContent = this._submitButtonDefaultText;
    }

    setInputValues(userInfoFromPage) {
        this._formInputList.forEach(input => {
            input.value = userInfoFromPage[input.name];
        });
    }
    
    // ваш совет видел, но решил сделать анонимный метод 
    // т.к. меньше кода будет в index, без вызова метода каждый раз
    // перед принятием решения этот момент обсудил с наставником 
    // ваш вариант с публичным методом отработаю и посмотрю как это работает 
    // не игнорирую советы и замечания ревью 
    // просто поджимают сроки, сегодня сильно накосячил с гитом потеряв пол дня
    // спасибо вам за развёрнутое ревью и советы))
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._renderLoading();
            this._formSubmit(this._getInputValues());
        });
    };
}