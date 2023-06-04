import Card from './scripts/components/Card.js';
import UserInfo from './scripts/components/UserInfo.js';
import FormValidator from './scripts/components/FormValidator.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
import Section from './scripts/components/Section.js';

import { initialCards } from './scripts/utils/constants.js';
import { userSelectorsConfig } from './scripts/utils/constants.js';
import { formConfig } from './scripts/utils/constants.js';
import { containerSelector } from './scripts/utils/constants.js'; 
import { buttonEditUserInfoOpen } from './scripts/utils/constants.js';
import { editUserInfoForm } from './scripts/utils/constants.js';
import { buttonAddNewItemOpen } from './scripts/utils/constants.js';
import { addNewItemForm } from './scripts/utils/constants.js';

///////////////////////////////////////////////////////////////////////////////

const userInfo = new UserInfo(userSelectorsConfig);

///////////////////////////////////////////////////////////////////////////////

const popupViewFullImage = new PopupWithImage ('#popup-view-full-image'); 
popupViewFullImage.setEventListeners();

///////////////////////////////////////////////////////////////////////////////

function rendererFunction(item) {
  const cardItem = new Card(item, '#element-template', popupViewFullImage.open);
  const cardElement = cardItem.generateCard();
  return cardElement;
};

///////////////////////////////////////////////////////////////////////////////

const content = new Section({
  items: initialCards,
  renderer: rendererFunction
}, containerSelector);
content.addItemsFromArray();

///////////////////////////////////////////////////////////////////////////////

const validatorEditUserInfo = new FormValidator(formConfig, editUserInfoForm);

const popupEditUserInfo = new PopupWithForm('#popup-edit-user-info', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupEditUserInfo.getInputValues());
  popupEditUserInfo.close();
});

buttonEditUserInfoOpen.addEventListener('click', () => {
  popupEditUserInfo.open();
  popupEditUserInfo.setEventListeners();
  popupEditUserInfo.setInputValues(userInfo.getUserInfo());
  validatorEditUserInfo.resetSubmitButton();
  validatorEditUserInfo.enableValidation();
}); 

///////////////////////////////////////////////////////////////////////////////

const validatorAddNewItem = new FormValidator(formConfig, addNewItemForm);

const popupAddNewItem = new PopupWithForm('#popup-add-new-item', (evt) => {
  evt.preventDefault();
  content.addItem(rendererFunction(popupAddNewItem.getInputValues()))
  popupAddNewItem.close();
}); 

buttonAddNewItemOpen.addEventListener('click', () => {
  popupAddNewItem.open();
  popupAddNewItem.setEventListeners();
  validatorAddNewItem.resetSubmitButton();
  validatorAddNewItem.enableValidation();
});