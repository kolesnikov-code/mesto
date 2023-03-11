// 1 БЛОК КОДА, ОТВЕЧАЕТ ЗА СОЗДАНИЕ HTML-ЭЛЕМЕНТА ИЗ DOM
// И ЗА ДОБАВЛЕНИЕ СЛУШАТЕЛЯ СОБЫТИЙ ДЛЯ КНОПОК: ЛАЙК И УДАЛИТЬ КАРТОЧКУ


function createNewElement() {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const buttonsDeleteElement = element.querySelectorAll('.element__delete-button');
  buttonsDeleteElement.forEach((deleteButton) => {
    deleteButton.addEventListener('click', function() {
      console.log('delete');
      const forDeleteElement = deleteButton.closest('.element');
      forDeleteElement.remove();
    });
  });

  const buttonsLikeElement = element.querySelectorAll('.element__like-button');
  buttonsLikeElement.forEach((likeButton) => {
    likeButton.addEventListener('click', function() {
      likeButton.classList.toggle('element__like-button_active');
    });
  });

  const buttonsOpenFullImage = element.querySelectorAll('.element__image');
  buttonsOpenFullImage.forEach((openFullImageButton) => {
    openFullImageButton.addEventListener('click', popupViewFullImageOpen);
  });

  return element;
};



// 2 БЛОК КОДА, ОТВЕЧАЕТ ЗА ДОБАВЛЕНИЕ ДАННЫХ ИЗ МАССИВА В КАРТОЧКУ 
// И ДОБАВЛЕНИЕ ЗАПОЛНЕННОЙ КАРТОЧКИ В ВЁРСТКУ

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

const elementsContainer = document.querySelector('.elements');
initialCards.forEach(function(item) {
  const newElement = createNewElement();
  const elementImage = newElement.querySelector('.element__image');
  const elementTitle = newElement.querySelector('.element__title');
  elementImage.src = item.link;
  elementImage.alt = item.name;
  elementTitle.textContent = item.name;
  elementsContainer.append(newElement);
});



// 3 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ РЕДАКТИРОВАНИЯ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ

let popupEditUserInfo = document.querySelector('#popup-edit-user-info'); // получить доступ к блоку POPUP
let formEditUserInfo = document.querySelector('#popup-container-edit-user-info'); // получить доступ к блоку POPUP
let buttonEditUserInfoOpen = document.querySelector('.profile__edit-button'); // получить доступ к кнопке ОТКРЫТЬ
let buttonEditUserInfoClose = document.querySelector('#popup-edit-user-info-button-close'); // получить доступ к кнопке ЗАКРЫТЬ
let nameInput = document.querySelector('#popup-input-value-username'); // получить доступ к полю ввода ИМЯ
let jobInput = document.querySelector('#popup-input-value-about-self'); // получить доступ к полю ввода ОБО МНЕ
let userName = document.querySelector('.profile__name'); // получить доступ к элементу ИМЯ на странице 
let userAboutSelf = document.querySelector('.profile__about-self'); // получить доступ к элементу ОБО МНЕ на странице 
function editUserInfoFormOpen() { // функция открывает форму
  popupEditUserInfo.classList.add('popup_opened'); // добавить класс видимости блоку с POPUP, открыть форму
  nameInput.value = userName.textContent; // ввести в поле ввода ИМЯ данные со страницы из элемента ИМЯ
  jobInput.value = userAboutSelf.textContent; // ввести в поле ввода ОБО МНЕ данные со страницы из элемента ОБО МНЕ
};
function editUserInfoFormClose() { // функция закрывает форму
  popupEditUserInfo.classList.remove('popup_opened'); // удалить класс видимости, закрыть форму
};
function editUserInfoFormSubmit(evt) { // функция добавляет новые текстовые данные на страницу и закрывает форму
  evt.preventDefault();
  userName.textContent = nameInput.value; // добавляет новые текстовые данные из поля ввода ИМЯ в элемент ИМЯ на страницу
  userAboutSelf.textContent = jobInput.value; // добавляет новые текстовые данные из поля ввода ОБО МНЕ в элемент ОБО МНЕ на страницу
  editUserInfoFormClose(); // вызывает функцию закрытия формы
};
buttonEditUserInfoOpen.addEventListener('click', editUserInfoFormOpen); // получить доступ к кнопке РЕДАКТИРОВАТЬ
buttonEditUserInfoClose.addEventListener('click', editUserInfoFormClose); // получить доступ к кнопке ЗАКРЫТЬ
formEditUserInfo.addEventListener('submit', editUserInfoFormSubmit); // получить доступ к кнопке СОХРАНИТЬ



// 4 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ РЕДАКТИРОВАНИЯ УЖЕ ДОБАВЛЕННЫХ НА СТРАНИЦУ КАРТОЧЕК С ФОТОГРАФИЯМИ

let popupAddNewItem = document.querySelector('#popup-add-new-item'); // получить доступ к блоку POPUP
let formAddNewItem = document.querySelector('#popup-container-add-new-item'); // получить доступ к блоку POPUP
let buttonAddNewItemOpen = document.querySelector('.profile__add-button'); // получить доступ к кнопке ОТКРЫТЬ
let buttonAddNewItemClose = document.querySelector('#popup-add-new-item-button-close'); // получить доступ к кнопке ЗАКРЫТЬ
let itemTitle = document.querySelector('#popup-input-value-item-title'); // получить доступ к полю ввода ИМЯ
let itemImageLink = document.querySelector('#popup-input-value-item-link'); // получить доступ к полю ввода ОБО МНЕ
let elementItem = document.querySelector('.element');
let elementTitle = elementItem.querySelector('.element__title');
let elementImage = elementItem.querySelector('.element__image');
function addNewItemFormOpen() { // функция открывает форму
  popupAddNewItem.classList.add('popup_opened'); // добавить класс видимости блоку с POPUP, открыть форму
  itemTitle.value = '';
  itemImageLink.value = ''; 
};
function addNewItemFormClose() { // функция закрывает форму
  popupAddNewItem.classList.remove('popup_opened'); // удалить класс видимости, закрыть форму
};
function addNewItemFormSubmit(evt) { // функция добавляет новые текстовые данные на страницу и закрывает форму
  evt.preventDefault();
  const newElement = createNewElement();
  const elementImage = newElement.querySelector('.element__image');
  const elementTitle = newElement.querySelector('.element__title');
  elementImage.src = itemImageLink.value;
  elementImage.alt = itemTitle.value;
  elementTitle.textContent = itemTitle.value;
  elementsContainer.prepend(newElement);
  addNewItemFormClose(); // вызывает функцию закрытия формы
};

buttonAddNewItemOpen.addEventListener('click', addNewItemFormOpen); // добавить слушатель к кнопке РЕДАКТИРОВАТЬ
buttonAddNewItemClose.addEventListener('click', addNewItemFormClose); // добавить слушатель к кнопке ЗАКРЫТЬ
formAddNewItem.addEventListener('submit', addNewItemFormSubmit); // добавить слушатель к форме (на кнопку сохранить и ввод клавишей Enter)



// 5 БЛОК КОДА, ОТВЕЧАЕТ ЗА ОТКРЫТИЕ POPUP 
// ДЛЯ ПРОСМОТРА КАРТИНКИ В ПОЛНОМ РАЗМЕРЕ

let popupViewFullImage = document.querySelector('#popup-view-full-image'); // получить доступ к блоку POPUP
let buttonPopupFullImageOpen = document.querySelector('.element__image'); // получить доступ к открытию картинки
let buttonPopupFullImageClose = document.querySelector('#popup-view-full-image-button-close'); // получить доступ к кнопке ЗАКРЫТЬ
let fullImage = document.querySelector('#popup-full-image');
let fullImageCaption = document.querySelector('.popup__full-image-caption')

function popupViewFullImageOpen() { 
  popupViewFullImage.classList.add('popup_opened'); // добавить класс видимости блоку с POPUP, открыть форму
  fullImage.src = this.src;
  fullImageCaption.textContent = this.alt;
};

function popupViewFullImageClose() { 
  popupViewFullImage.classList.remove('popup_opened'); // добавить класс видимости блоку с POPUP, открыть форму
  fullImage.src = '';
  fullImage.alt = '';
};


buttonPopupFullImageOpen.addEventListener('click', popupViewFullImageOpen); // добавить слушатель к кнопке РЕДАКТИРОВАТЬ
buttonPopupFullImageClose.addEventListener('click', popupViewFullImageClose); // добавить слушатель к кнопке ЗАКРЫТЬ
