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
  popupForDeleteCard
} from "../utils/constants.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithSubmit from '../components/PopupWithSubmit';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";

let userId;

const imagePopup = new PopupWithImage(popupTypeImageSelector);

const confirmModal = new PopupWithSubmit(popupForDeleteCard);
confirmModal.setEventListeners()

imagePopup.setEventListeners();

const editFormValidator = new FormValidator(config, profileFormPopup);
const addCardFormValidator = new FormValidator(config, cardFormPopup);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

api.getInitialCards()
.then(items => {
  const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
  cards.renderer();
})

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({name: res.name, about: res.about})
    userId = res._id
  })

const addNewCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      imagePopup.open(data);
    },
    handleDeleteCard: (userId) => {
      confirmModal.open();
      confirmModal.setAction(() => {
        api.deleteCard(data._id)
          .then((res) => {
            console.log("card is deleted", res);
            card.removeCard();
          })
      })
    }
  }, cardTemplate, userId);
  return card.createCard();
};

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
  const data = popupWithAddCard.getInputsValues()
  
  api.createCard(data)
    .then(item => {
      const cards = new Section({ item, renderer: addNewCard }, cardsContainer);
      cards.addItem(addNewCard(item));
      popupWithAddCard.close();
    });
})
  
popupWithAddCard.setEventListeners();

const openAddCardForm = document.querySelector(".profile__add-button");
openAddCardForm.addEventListener("click", () => {
  popupWithAddCard.open();
  addCardFormValidator.resetValidation();
});
