let popup = document.querySelector('.popup'); // получить доступ к блоку POPUP
let formElement = document.querySelector('.popup__container'); // получить доступ к блоку POPUP

let buttonEditOpen = document.querySelector('.profile__edit-button'); // получить доступ к кнопке ОТКРЫТЬ
let buttonEditClose = document.querySelector('.popup__edit-button-close'); // получить доступ к кнопке ЗАКРЫТЬ

let nameInput = document.querySelector('.popup__input_edit_name'); // получить доступ к полю ввода ИМЯ
let jobInput = document.querySelector('.popup__input_edit_about-self'); // получить доступ к полю ввода ОБО МНЕ

let userName = document.querySelector('.profile__name'); // получить доступ к элементу поля ИМЯ на странице 
let userAboutSelf = document.querySelector('.profile__about-self'); // получить доступ к элементу поля ОБО МНЕ на странице 

function editOpen() { // функция открывает форму
  popup.classList.add('popup_opened'); // добавить класс видимости блоку с POPUP, открыть форму
  nameInput.value = userName.textContent; // ввести в поле ввода ИМЯ данные со страницы из элемента ИМЯ
  jobInput.value = userAboutSelf.textContent; // ввести в поле ввода ОБО МНЕ данные со страницы из элемента ОБО МНЕ
}

function editClose() { // функция закрывает форму
  popup.classList.remove('popup_opened'); // удалить класс видимости, закрыть форму
}

function handleFormSubmit(evt) { // функция добавляет новые текстовые данные на страницу и закрывает форму
  evt.preventDefault();
  userName.textContent = nameInput.value; // добавляет новые текстовые данные из поля ввода ИМЯ в элемент ИМЯ на страницу
  userAboutSelf.textContent = jobInput.value; // добавляет новые текстовые данные из поля ввода ОБО МНЕ в элемент ОБО МНЕ на страницу
  editClose(); // вызывает функцию закрытия формы
}

buttonEditOpen.addEventListener('click', editOpen); // получить доступ к кнопке РЕДАКТИРОВАТЬ
buttonEditClose.addEventListener('click', editClose); // получить доступ к кнопке ЗАКРЫТЬ

formElement.addEventListener('submit', handleFormSubmit); // получить доступ к кнопке СОХРАНИТЬ











const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


