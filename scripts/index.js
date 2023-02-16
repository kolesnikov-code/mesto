let popup = document.querySelector('.popup');

let userName = document.querySelector('.profile-info__name');
let aboutSelf = document.querySelector('.profile-info__description.textContent');

let editOpenButton = document.querySelector('.profile-info__edit-button');
let editSaveButton = document.querySelector('.popup__edit-button-save');
let editCloseButton = document.querySelector('.popup__edit-button-close');

let inputUserName = document.querySelector('.popup__edit-name');
let inputAboutSelf = document.querySelector('.popup__edit-about-self');

inputUserName.textContent = userName.textContent;

editOpenButton.addEventListener('click', function () {
  popup.classList.add('popup_active');
});

editCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_active');
});

function editSave() {
  evt.preventDefault();
}

editSaveButton.addEventListener('click', editSave);
