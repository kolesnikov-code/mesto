import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveSubmitButtonClass: 'form__button-save_inactive'
};

// 1 БЛОК КОДА, ОТВЕЧАЕТ ЗА ХРАНЕНИЕ МАССИВА ДАННЫХ
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





// 2 БЛОК КОДА, ОТВЕЧАЕТ ЗА ДОБАВЛЕНИЕ КАРТОЧЕК 
// НА ОСНОВЕ ДАННЫХ ИЗ МАССИВА ВЫШЕ
const elementsContainer = document.querySelector('.elements');
const renderElements = () => {
  initialCards.forEach((item) => {
    const cardItem = new Card(item, '#element-template');

    const newElement = cardItem.generateCard();
    elementsContainer.append(newElement);
  });
};
renderElements();





// 3 БЛОК КОДА, ОТВЕЧАЕТ ЗА СОЗДАНИЕ 
// ФУНКЦИЙ ОТКРЫТИЯ И ЗАКРЫТИЯ POPUP 

// ОТКРЫВАЕТ POPUP
export function openPopup(popup) {
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





// 4 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОБЪЯВЛЕНИЕ 
// И ХРАНЕНИЕ ОБЪЕКТА "ФОРМА" С ЕЁ ЭЛЕМЕНТАМИ






// 5 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
const popupEditUserInfo = document.querySelector('#popup-edit-user-info'); 
const editUserInfoFormContainer = document.querySelector('#popup-container-edit-user-info'); // !!!!!!!!!!!!!!!!
const buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); 
const buttonEditUserInfoClose = document.querySelector('#form-edit-user-info-button-close');
const inputNameInEditForm = document.querySelector('#form-input-value-username'); 
const inputAboutSelfInEditForm = document.querySelector('#form-input-value-about-self'); 
const userNameFromPage = document.querySelector('.profile__name'); 
const userAboutSelfFromPage = document.querySelector('.profile__about-self'); 
const editUserInfoForm = editUserInfoFormContainer.querySelector('.form');
const validatorEditUserInfo = new FormValidator(formConfig, editUserInfoForm);
validatorEditUserInfo.enableValidation();

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
editUserInfoFormContainer.addEventListener('submit', submitEditUserInfoForm); 






// 6 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ ДОБАВЛЕНИЯ НОВЫХ КАРТОЧЕК НА СТРАНИЦУ

const popupAddNewItem = document.querySelector('#popup-add-new-item'); 
const addNewItemFormContainer = document.querySelector('#popup-container-add-new-item');
const buttonAddNewItemOpen = document.querySelector('.profile__add-button'); 
const buttonAddNewItemClose = document.querySelector('#form-add-new-item-button-close'); 
const inputTitleInNewItemForm = document.querySelector('#form-input-value-item-title'); 
const inputLinkInNewItemForm = document.querySelector('#form-input-value-item-link'); 
const addNewItemForm = addNewItemFormContainer.querySelector('.form');
const validatorAddNewItem = new FormValidator(formConfig, addNewItemForm);
validatorAddNewItem.enableValidation();

function openAddNewItemForm() { 
  openPopup(popupAddNewItem);
  inputTitleInNewItemForm.value = '';
  inputLinkInNewItemForm.value = '';
  validatorAddNewItem.resetSubmitButton();
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

  const cardItem = new Card(item, '#element-template');
  const newElement = cardItem.generateCard();
  elementsContainer.prepend(newElement);
  closeAddNewItemForm();
};

buttonAddNewItemOpen.addEventListener('click', openAddNewItemForm);
buttonAddNewItemClose.addEventListener('click', closeAddNewItemForm); 
addNewItemFormContainer.addEventListener('submit', submitAddNewItemForm); 





// 7 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ ПРОСМОТРА КАРТИНКИ В ПОЛНОМ РАЗМЕРЕ

export const popupViewFullImage = document.querySelector('#popup-view-full-image'); 
const buttonPopupFullImageClose = document.querySelector('#popup-view-full-image-button-close'); 

function closePopupViewFullImage() { 
  closePopup(popupViewFullImage);
};

buttonPopupFullImageClose.addEventListener('click', closePopupViewFullImage); 


