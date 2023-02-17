let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');

let buttonEditOpen = document.querySelector('.profile__edit-button');
let buttonEditClose = document.querySelector('.popup__edit-button-close');

let nameInput = document.querySelector('.popup__input_edit_name');
let jobInput = document.querySelector('.popup__input_edit_about-self');

let userName = document.querySelector('.profile__name');
let userAboutSelf = document.querySelector('.profile__about-self');

function editOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userAboutSelf.textContent;
}

function editClose() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAboutSelf.textContent = jobInput.value;
  editClose();
}

buttonEditOpen.addEventListener('click', editOpen);
buttonEditClose.addEventListener('click', editClose);

formElement.addEventListener('submit', handleFormSubmit);
