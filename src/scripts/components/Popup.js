export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__button-close')
    };

    _handleBtnClose = () => {
        this.close();
    };
    
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') { 
            this.close();
        };
    };

    _handleOverlayClose = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.close();
        };
    };

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        this._closeButton.addEventListener('click', this._handleBtnClose);
        this._popup.addEventListener('click', this._handleOverlayClose)
    };
}