// 1 БЛОК КОДА, ОТВЕЧАЕТ ЗА СОЗДАНИЕ HTML-ЭЛЕМЕНТА ИЗ DOM
// И ЗА ДОБАВЛЕНИЕ СЛУШАТЕЛЯ СОБЫТИЙ ДЛЯ КНОПОК: ЛАЙК И УДАЛИТЬ КАРТОЧКУ


function createCard(card) {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;

  const deleteButton = element.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', function() {
    const forDeleteElement = deleteButton.closest('.element');
    forDeleteElement.remove();
  });

  const likeButton = element.querySelector('.element__like-button');
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like-button_active');
  });

  const openFullImageButton = elementImage;
  openFullImageButton.addEventListener('click', openPopupViewFullImage);

  return element;
};



// 2 БЛОК КОДА, ОТВЕЧАЕТ ЗА ДОБАВЛЕНИЕ ДАННЫХ ИЗ МАССИВА В КАРТОЧКУ 
// И ДОБАВЛЕНИЕ ЗАПОЛНЕННОЙ КАРТОЧКИ В ВЁРСТКУ

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsContainer = document.querySelector('.elements');
initialCards.forEach(function (item) {
  const newElement = createCard(item);
  elementsContainer.append(newElement);
});



// 3 БЛОК КОДА, ОТВЕЧАЕТ ЗА СОЗДАНИЕ 
// ФУНКЦИЙ ОТКРЫТИЯ И ЗАКРЫТИЯ POPUP 

// ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEscape);
};

// ЗАКРЫВАЕТ POPUP 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEscape);
};

// ЗАКРЫВАЕТ POPUP НАЖАТИЕМ КЛАВИШИ ESCAPE
function closePopupWithEscape(evt) {
  if(evt.key === 'Escape') { 
    const popup = document.querySelector('.popup_opened')
    closePopup(popup) 
  };
}; 

// ЗАКРЫВАЕТ POPUP КЛИКОМ НА OVERLAY
const allPopup = document.querySelectorAll('.popup');
allPopup.forEach(function (popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup);
    };
  });
});


// 4 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ

const popupEditUserInfo = document.querySelector('#popup-edit-user-info'); 
const formEditUserInfo = document.querySelector('#popup-container-edit-user-info');
const buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); 
const buttonEditUserInfoClose = document.querySelector('#form-edit-user-info-button-close');
const inputNameInEditForm = document.querySelector('#form-input-value-username'); 
const inputAboutSelfInEditForm = document.querySelector('#form-input-value-about-self'); 
const userNameFromPage = document.querySelector('.profile__name'); 
const userAboutSelfFromPage = document.querySelector('.profile__about-self'); 

function openEditUserInfoForm() { 
  openPopup(popupEditUserInfo);
  inputNameInEditForm.value = userNameFromPage.textContent; 
  inputAboutSelfInEditForm.value = userAboutSelfFromPage.textContent; 
};

function closeEditUserInfoForm() { 
  closePopup(popupEditUserInfo);
};

function submitEditUserInfoForm(evt) { 
  evt.preventDefault();
  userNameFromPage.textContent = inputNameInEditForm.value; 
  userAboutSelfFromPage.textContent = inputAboutSelfInEditForm.value; 
  closeEditUserInfoForm(); 
};

buttonEditUserInfoOpen.addEventListener('click', openEditUserInfoForm); 
buttonEditUserInfoClose.addEventListener('click', closeEditUserInfoForm); 
formEditUserInfo.addEventListener('submit', submitEditUserInfoForm); 



// 5 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ ДОБАВЛЕНИЯ НОВЫХ КАРТОЧЕК НА СТРАНИЦУ

const popupAddNewItem = document.querySelector('#popup-add-new-item'); 
const buttonSaveNewElement = popupAddNewItem.querySelector('.form__button-save');
const formAddNewItem = document.querySelector('#popup-container-add-new-item');
const buttonAddNewItemOpen = document.querySelector('.profile__add-button'); 
const buttonAddNewItemClose = document.querySelector('#form-add-new-item-button-close'); 
const inputTitleInNewItemForm = document.querySelector('#form-input-value-item-title'); 
const inputLinkInNewItemForm = document.querySelector('#form-input-value-item-link'); 

function openAddNewItemForm() { 
  openPopup(popupAddNewItem);
  inputTitleInNewItemForm.value = '';
  inputLinkInNewItemForm.value = '';
  resetButton(buttonSaveNewElement, objectForm);
};

function closeAddNewItemForm() { 
  closePopup(popupAddNewItem);
};

function submitAddNewItemForm(evt) { 
  evt.preventDefault();
  const item = {
    name: inputTitleInNewItemForm.value,
    link: inputLinkInNewItemForm.value
  };
  const newElement = createCard(item);
  elementsContainer.prepend(newElement);
  evt.target.reset()
  closeAddNewItemForm();
};

buttonAddNewItemOpen.addEventListener('click', openAddNewItemForm);
buttonAddNewItemClose.addEventListener('click', closeAddNewItemForm); 
formAddNewItem.addEventListener('submit', submitAddNewItemForm); 



// 6 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ ПРОСМОТРА КАРТИНКИ В ПОЛНОМ РАЗМЕРЕ

const popupViewFullImage = document.querySelector('#popup-view-full-image'); 
const buttonPopupFullImageOpen = document.querySelector('.element__image'); 
const buttonPopupFullImageClose = document.querySelector('#popup-view-full-image-button-close'); 
const fullImage = document.querySelector('#popup-full-image');
const fullImageCaption = document.querySelector('.popup__full-image-caption')

function openPopupViewFullImage(evt) { 
  openPopup(popupViewFullImage);
  fullImage.src = evt.target.src;
  fullImage.alt = evt.target.alt;
  fullImageCaption.textContent = evt.target.alt;
};

function closePopupViewFullImage() { 
  closePopup(popupViewFullImage);
};

buttonPopupFullImageOpen.addEventListener('click', openPopupViewFullImage); 
buttonPopupFullImageClose.addEventListener('click', closePopupViewFullImage); 

