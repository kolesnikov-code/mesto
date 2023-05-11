import { openPopup } from './index.js';
import { popupViewFullImage } from './index.js';

export class Card {
    constructor(data, templateSelector) {
        // Объявить селектор темплэйт-элемента для извлечения данных из него
        this._templateSelector = templateSelector;
        // Присвоить значения для ссылки и названия картинки
        this._link = data.link;
        this._title = data.name;
        // Объявить текущий элемент, с котороым происходит вся работа
        this._element = this._getTemplate();
        // Достать все кнопки и элементы для нажатия
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._openFullImageButton = this._element.querySelector('.element__image');
        this._openFullImage = document.querySelector('#popup-full-image');
        this._openFullTitle = document.querySelector('.popup__full-image-caption')
    };

    _getTemplate() {
        const elementItem = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        return elementItem;
    };
    
    _removeElement() {
        this._element.remove();
    };

    _handleLikeImage() {
        this._likeButton.classList.toggle('element__like-button_active');
    };
    
    _openFullImagePopup() {
        this._openFullImage.src = this._link;
        this._openFullImage.alt = this._title;
        this._openFullTitle.textContent = this._title;
        openPopup(popupViewFullImage);
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeImage();
        });
    
        this._deleteButton.addEventListener('click', () => {
            this._removeElement()
        });
    
        this._openFullImageButton.addEventListener('click', () => {
            this._openFullImagePopup()
        });
    };
  
    generateCard() {
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
    
        return this._element;
    };
};