// 1 БЛОК КОДА, ОТВЕЧАЕТ ЗА ХРАНЕНИЕ МАССИВА ДАННЫХ
export const initialCards = [
    {
      itemtitle: 'Архыз',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      itemtitle: 'Челябинская область',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      itemtitle: 'Иваново',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      itemtitle: 'Камчатка',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      itemtitle: 'Холмогорский район',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      itemtitle: 'Байкал',
      itemlink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export const userSelectorsConfig = {
  userNameSelector: '.profile__name',
  userAboutSelfSelector: '.profile__about-self'
};

export const formConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveSubmitButtonClass: 'form__button-save_inactive'
};

export const containerSelector = '.elements';
export const editUserInfoFormContainer = document.querySelector('#popup-container-edit-user-info');
export const buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); 
export const editUserInfoForm = editUserInfoFormContainer.querySelector('.form');
export const addNewItemFormContainer = document.querySelector('#popup-container-add-new-item');
export const buttonAddNewItemOpen = document.querySelector('.profile__add-button'); 
export const addNewItemForm = addNewItemFormContainer.querySelector('.form');