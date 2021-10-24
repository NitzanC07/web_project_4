import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import {
  cardTemplate,
  profileFormPopup,
  config,
  cardFormPopup,
  cardsContainer,
  initialCards,
  profileFormPopupSelector,
  cardFormPopupSelector,
  profileName,
  profileDescription,
  popupTypeImageSelector
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// Image popup.
const handleCardClick = (name, link) => {
  const imagePopup = new Popup(popupTypeImageSelector);
  const imageDetails = new PopupWithImage(name, link);
  imageDetails.open();
  imagePopup.open();
}

const addNewCard = (data) => {
  const cardObj = new Card(data, cardTemplate, handleCardClick);
  return cardObj.createCard();
}

const editFormValidator = new FormValidator(config, profileFormPopup);
const addCardFormValidator = new FormValidator(config, cardFormPopup);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const items = initialCards;
const cards = new Section({items, renderer: addNewCard}, cardsContainer);
cards.renderer();

// Popup for profile details form.
const popupWithProfile = new PopupWithForm(profileFormPopupSelector, (data) => {
  const userInfo = new UserInfo(data.full_name, data.about)
  userInfo.setUserInfo();
  popupWithProfile.close()
});
popupWithProfile.setEventListener();

const openEditButton = document.querySelector(".profile__edit-button");
openEditButton.addEventListener("click", () => { 
  popupWithProfile.open();
  const userInfo = new UserInfo(profileName.textContent, profileDescription.textContent)
  userInfo.getUserInfo();
  editFormValidator.resetValidation();
});

// Popup for add card form.
const popupWithAddCard = new PopupWithForm(cardFormPopupSelector, (data) => {
  cards.addItem(addNewCard(data));
  popupWithAddCard.close();
});
popupWithAddCard.setEventListener();

const openAddCardForm = document.querySelector(".profile__add-button");
openAddCardForm.addEventListener('click', () => {
  popupWithAddCard.open();
  addCardFormValidator.resetValidation();
});
