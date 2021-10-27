import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
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
  popupTypeImageSelector,
  popupName,
  popupDescription,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";



// Image popup.
const imagePopup = new PopupWithImage(popupTypeImageSelector);

imagePopup.setEventListeners();

const addNewCard = (data) => {
  const cardObj = new Card(data, cardTemplate, () => {
    imagePopup.open(data);
  });
  return cardObj.createCard();
};
const editFormValidator = new FormValidator(config, profileFormPopup);
const addCardFormValidator = new FormValidator(config, cardFormPopup);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const items = initialCards;
const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
cards.renderer();

// Popup for profile details form.
const userInfo = new UserInfo(profileName, profileDescription);
const popupWithProfile = new PopupWithForm(profileFormPopupSelector, () => {
  userInfo.setUserInfo(popupWithProfile.getInputsValues());
  popupWithProfile.close();
});
popupWithProfile.setEventListeners();

const openEditButton = document.querySelector(".profile__edit-button");
openEditButton.addEventListener("click", () => {
  popupWithProfile.open();
  const userData = userInfo.getUserInfo(profileName, profileDescription);
  popupName.value = userData.name;
  popupDescription.value = userData.about;
  editFormValidator.resetValidation();
});

// Popup for add card form.
const popupWithAddCard = new PopupWithForm(cardFormPopupSelector, () => {
  cards.addItem(addNewCard(popupWithAddCard.getInputsValues()));
  popupWithAddCard.close();
});
popupWithAddCard.setEventListeners();

const openAddCardForm = document.querySelector(".profile__add-button");
openAddCardForm.addEventListener("click", () => {
  popupWithAddCard.open();
  addCardFormValidator.resetValidation();
});
