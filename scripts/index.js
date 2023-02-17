let popup = document.querySelector('.popup');

let userName = document.querySelector('.profile-info__name');
let aboutSelf = document.querySelector('.profile-info__description');

let editOpenButton = document.querySelector('.profile-info__edit-button');
let editSaveButton = document.querySelector('.popup__edit-button-save');
let editCloseButton = document.querySelector('.popup__edit-button-close');

let inputUserName = document.querySelector('.popup__edit-name');
let inputAboutSelf = document.querySelector('.popup__edit-about-self');

editOpenButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  inputUserName.value = userName.textContent;
  inputAboutSelf.value = aboutSelf.textContent;
});

editCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

editSaveButton.addEventListener('click', function () {
  userName.textContent = inputUserName.value;
  aboutSelf.textContent = inputAboutSelf.value;
  popup.classList.remove('popup_opened');
});
