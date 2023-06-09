import './index.css';

import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';

import { 
  initialCards,
  userSelectorsConfig,
  formConfig,
  containerSelector,
  buttonEditUserInfoOpen,
  editUserInfoForm,
  buttonAddNewItemOpen,
  addNewItemForm
} from '../scripts/utils/constants.js';

///////////////////////////////////////////////////////////////////////////////

const userInfo = new UserInfo(userSelectorsConfig);

///////////////////////////////////////////////////////////////////////////////

const popupViewFullImage = new PopupWithImage ('#popup-view-full-image'); 
popupViewFullImage.setEventListeners();

///////////////////////////////////////////////////////////////////////////////

function createCard(item) {
  const cardItem = new Card(item, '#element-template', popupViewFullImage.open);
  return cardItem.generateCard();
};

///////////////////////////////////////////////////////////////////////////////

const content = new Section({
  items: initialCards,
  renderer: createCard
}, containerSelector);
content.addItemsFromArray();

///////////////////////////////////////////////////////////////////////////////

const validatorEditUserInfo = new FormValidator(formConfig, editUserInfoForm);
validatorEditUserInfo.enableValidation();

const popupEditUserInfo = new PopupWithForm('#popup-edit-user-info', inputValues => {
  userInfo.setUserInfo(inputValues); 
  console.log(inputValues);
});

buttonEditUserInfoOpen.addEventListener('click', () => {
  popupEditUserInfo.open();
  popupEditUserInfo.setEventListeners();
  popupEditUserInfo.setInputValues(userInfo.getUserInfo());
  validatorEditUserInfo.resetSubmitButton();
}); 

///////////////////////////////////////////////////////////////////////////////

const validatorAddNewItem = new FormValidator(formConfig, addNewItemForm);
validatorAddNewItem.enableValidation();

const popupAddNewItem = new PopupWithForm('#popup-add-new-item', inputValues => {
  content.addItem(createCard(inputValues))
}); 

buttonAddNewItemOpen.addEventListener('click', () => {
  popupAddNewItem.open();
  popupAddNewItem.setEventListeners();
  validatorAddNewItem.resetSubmitButton();
});