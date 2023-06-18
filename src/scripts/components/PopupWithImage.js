import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImage = this._popup.querySelector('.popup__full-image');
        this._fullImageCaption = this._popup.querySelector('.popup__full-image-caption');
    };

    open = (image) => {
        super.open();
        this._fullImage.src = image.link;
        this._fullImage.alt = image.name;
        this._fullImageCaption.textContent = image.name;
    };
}