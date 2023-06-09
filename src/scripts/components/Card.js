export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        // Объявить селектор темплэйт-элемента для извлечения данных из него
        this._templateSelector = templateSelector;
        // Присвоить значения для ссылки и названия картинки
        this._data = data;
        // Объявить текущий элемент, с котороым происходит вся работа
        this._element = this._getTemplate();
        // Достать все кнопки и элементы для нажатия
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._openFullImageButton = this._element.querySelector('.element__image');
        this._openFullImage = document.querySelector('#popup-full-image');
        this._openFullTitle = document.querySelector('.popup__full-image-caption');
        this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._data);
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
        this._element.querySelector('.element__image').src = this._data.itemlink;
        this._element.querySelector('.element__image').alt = this._data.itemtitle;
        this._element.querySelector('.element__title').textContent = this._data.itemtitle;
    
        return this._element;
    };
};