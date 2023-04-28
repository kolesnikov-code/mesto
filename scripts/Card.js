export default class Card {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._image = data.link;
        this._title = data.name;
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

    _handleLikeImage(likeButton) {
        likeButton.classList.toggle('element__like-button_active');
    };
  
    _setEventListeners(element) {
        this._likeButton = element.querySelector('.element__like-button');
        this._likeButton.addEventListener('click', () => {
            this._handleLikeImage(this._likeButton);
        });
    
        this._deleteButton = element.querySelector('.element__delete-button');
        this._deleteButton.addEventListener('click', () => {
            this._removeElement()
        });
    
        this._openFullImageButton = element.querySelector('.element__image');
        this._openFullImageButton.addEventListener('click', () => {
            openPopupViewFullImage();
        });
    };
  
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners(this._element);
        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__image').alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;
    
        return this._element;
    };
};