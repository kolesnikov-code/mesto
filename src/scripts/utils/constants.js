// 1 БЛОК КОДА, ОТВЕЧАЕТ ЗА ХРАНЕНИЕ МАССИВА ДАННЫХ
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

// Форма редактирования аватарки
const editUserAvatarFormContainer = document.querySelector('#popup-container-edit-user-avatar');
const buttonEditUserAvatarOpen = document.querySelector('.profile__avatar-edit-button'); 
const editUserAvatarForm = editUserAvatarFormContainer.querySelector('.form');

// Форма редактирования полей Имя , Обо мне
const editUserInfoFormContainer = document.querySelector('#popup-container-edit-user-info');
const buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); 
const editUserInfoForm = editUserInfoFormContainer.querySelector('.form');

// Форма добавления новой картинки
const addNewItemFormContainer = document.querySelector('#popup-container-add-new-item');
const buttonAddNewItemOpen = document.querySelector('.profile__add-button'); 
const addNewItemForm = addNewItemFormContainer.querySelector('.form');

export {
  containerSelector,
  editUserAvatarFormContainer,
  buttonEditUserAvatarOpen,
  editUserAvatarForm,
  editUserInfoFormContainer,
  buttonEditUserInfoOpen,
  editUserInfoForm,
  addNewItemFormContainer,
  buttonAddNewItemOpen,
  addNewItemForm,
};