import './index.css';

import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api';

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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '97ad322c-b015-452e-9cce-fedc441ba370',
    'Content-Type': 'application/json'
  }
}); 

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
  renderer: createCard
}, containerSelector);

///////////////////////////////////////////////////////////////////////////////

const validatorEditUserInfo = new FormValidator(formConfig, editUserInfoForm);
validatorEditUserInfo.enableValidation();

const popupEditUserInfo = new PopupWithForm('#popup-edit-user-info', inputValues => {
  userInfo.setUserInfo(inputValues); 
});

popupEditUserInfo.setEventListeners();

buttonEditUserInfoOpen.addEventListener('click', () => {
  popupEditUserInfo.open();
  popupEditUserInfo.setInputValues(userInfo.getUserInfo());
  validatorEditUserInfo.resetSubmitButton();
}); 

///////////////////////////////////////////////////////////////////////////////

const validatorAddNewItem = new FormValidator(formConfig, addNewItemForm);
validatorAddNewItem.enableValidation();

const popupAddNewItem = new PopupWithForm('#popup-add-new-item', inputValues => {
  content.addItem(createCard(inputValues));
  console.log(inputValues);

}); 

popupAddNewItem.setEventListeners();

buttonAddNewItemOpen.addEventListener('click', () => {
  popupAddNewItem.open();
  validatorAddNewItem.resetSubmitButton();
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([dataUserInfo, dataCards]) => {
    console.log(dataUserInfo);
    console.log(dataCards);
    userInfo.setUserInfo({avatar: dataUserInfo.avatar, username: dataUserInfo.name, aboutself: dataUserInfo.about});
    content.addItemsFromArray(dataCards);
  })