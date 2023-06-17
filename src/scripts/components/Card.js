export default class Card {
    constructor(data, templateSelector, handleCardClick, openDeletePopup, changeLikeStatus) {
        console.log(data)
        this._templateSelector = templateSelector;
        this._data = data;
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-button');
        this._likeCounter = this._element.querySelector('.element__like-counter');
        this._changeLikeStatus = changeLikeStatus;
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._openDeletePopup = openDeletePopup;
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
        this._openDeletePopup({ card: this, cardId: this._data._id });
    };

    _handleLikeImage() {
        this._changeLikeStatus(this._likeButton, this._data._id)
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
  
    _changeVisibleRemoveElement() {
        if (this._data.myId !== this._data.owner._id) {
            this._deleteButton.style.display = 'none';
        }
    }

    _checkLikeStatus() {
        this._data.likes.forEach(like => {
            if (like._id === this._data.myId) {
                this._likeButton.classList.add('element__like-button_active');
            }
        });
        this._likeCounter.textContent = this._data.likes.length;
    };

    deleteElement() {
        this._element.remove();
        this._element = null;
    }

    toggleLikeButton(likes) {
        this._likeButton.classList.toggle('element__like-button_active');
        this._likeCounter.textContent = likes.length;
    };

    generateCard() {
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this._data.link;
        this._element.querySelector('.element__image').alt = this._data.name;
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._changeVisibleRemoveElement();
        this._checkLikeStatus();

        return this._element;
    };
};