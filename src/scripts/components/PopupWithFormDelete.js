import Popup from "./Popup.js";
export default class PopupWithFormDelete extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formElement = this._popup.querySelector('.form');
        this._formSubmit = formSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._formSubmit({ card: this._card, cardId: this._cardId });
        });
    };

    open = ({ card, cardId }) => {
        super.open();
        this._card = card;
        this._cardId = cardId;
    }
}