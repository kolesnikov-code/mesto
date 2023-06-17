import './index.css';

import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithFormDelete from '../scripts/components/PopupWithFormDelete';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api';

import { 
  userSelectorsConfig,
  formConfig,
  containerSelector,
  buttonEditUserAvatarOpen,
  editUserAvatarForm,
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

const popupDeleteItem = new PopupWithFormDelete('#popup-delete-item', ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.deleteElement();
      popupDeleteItem.close();
    })
    .catch((error => console.error(`Произошла ошибка при удалении карточки ${error}`)))
    .finally() 
}); 

popupDeleteItem.setEventListeners();

///////////////////////////////////////////////////////////////////////////////

function createCard(item) {
  const cardItem = new Card(item, '#element-template', popupViewFullImage.open, popupDeleteItem.open, (likeButtonElement, cardId) => {
    if (likeButtonElement.classList.contains('element__like-button_active')) {
      api.deleteLike(cardId)
        .then(res => {
          cardItem.toggleLikeButton(res.likes);
        })
        .catch((error => console.error(`Произошла ошибка при удалении лайка ${error}`)))
    } else {
      api.addLike(cardId)
        .then(res => {
          cardItem.toggleLikeButton(res.likes);
        })
        .catch((error => console.error(`Произошла ошибка при добавлении лайка ${error}`)))
    }
  });
  return cardItem.generateCard();
};

///////////////////////////////////////////////////////////////////////////////

const content = new Section({
  renderer: createCard
}, containerSelector);

///////////////////////////////////////////////////////////////////////////////

const validatorEditUserInfo = new FormValidator(formConfig, editUserInfoForm);
validatorEditUserInfo.enableValidation();

const popupEditUserInfo = new PopupWithForm('#popup-edit-user-info', data => {
  api.editUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ avatarlink: res.avatar, username: res.name, aboutself: res.about });
    })
    .catch((error => console.error(`Произошла ошибка при редактировании профиля ${error}`)))
    .finally()
});

popupEditUserInfo.setEventListeners();

buttonEditUserInfoOpen.addEventListener('click', () => {
  popupEditUserInfo.open();
  popupEditUserInfo.setInputValues(userInfo.getUserInfo());
  validatorEditUserInfo.resetSubmitButton();
}); 

///////////////////////////////////////////////////////////////////////////////

const validatorEditUserAvatar = new FormValidator(formConfig, editUserAvatarForm);
validatorEditUserAvatar.enableValidation();

const popupEditUserAvatar = new PopupWithForm('#popup-edit-user-avatar', data => {
  api.editUserAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ avatarlink: res.avatar, username: res.name, aboutself: res.about });
    })
    .catch((error => console.error(`Произошла ошибка при редактировании аватарки ${error}`)))
    .finally()
});

popupEditUserAvatar.setEventListeners();

buttonEditUserAvatarOpen.addEventListener('click', () => {
  popupEditUserAvatar.open();
  popupEditUserAvatar.setInputValues(userInfo.getUserInfo());
  validatorEditUserAvatar.resetSubmitButton();
}); 

///////////////////////////////////////////////////////////////////////////////

const validatorAddNewItem = new FormValidator(formConfig, addNewItemForm);
validatorAddNewItem.enableValidation();

const popupAddNewItem = new PopupWithForm('#popup-add-new-item', data => {
  api.addNewCard(data)
    .then(res => {
      content.addItemPrepend(createCard(res));
    })
    .catch((error => console.error(`Произошла ошибка при создании новой карточки ${error}`)))
    .finally() 
}); 

popupAddNewItem.setEventListeners();

buttonAddNewItemOpen.addEventListener('click', () => {
  popupAddNewItem.open();
  validatorAddNewItem.resetSubmitButton();
});

///////////////////////////////////////////////////////////////////////////////

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([dataUserInfo, dataCards]) => {
    dataCards.forEach(element => element.myId = dataUserInfo._id)
    userInfo.setUserInfo({avatarlink: dataUserInfo.avatar, username: dataUserInfo.name, aboutself: dataUserInfo.about});
    content.addItemsFromArray(dataCards);
  })
  .catch((error => console.error(`Произошла ошибка при загрузке данных ${error}`)))