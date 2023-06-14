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
  userAboutSelfSelector: '.profile__about-self',
  userAvatarImageSelector: '.profile__avatar'
};

export const formConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveSubmitButtonClass: 'form__button-save_inactive'
};

const containerSelector = '.elements';
const editUserInfoFormContainer = document.querySelector('#popup-container-edit-user-info');
const buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); 
const editUserInfoForm = editUserInfoFormContainer.querySelector('.form');
const addNewItemFormContainer = document.querySelector('#popup-container-add-new-item');
const buttonAddNewItemOpen = document.querySelector('.profile__add-button'); 
const addNewItemForm = addNewItemFormContainer.querySelector('.form');

export {
  containerSelector,
  editUserInfoFormContainer,
  buttonEditUserInfoOpen,
  editUserInfoForm,
  addNewItemFormContainer,
  buttonAddNewItemOpen,
  addNewItemForm,
};