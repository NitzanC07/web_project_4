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


const imagePopup = new PopupWithImage(popupTypeImageSelector);

const confirmModal = new PopupWithSubmit(popupForDeleteCard);
confirmModal.setEventListeners()

imagePopup.setEventListeners();

const addNewCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      imagePopup.open(data);
    },
    handleDeleteCard: (id) => {
      confirmModal.open();
      confirmModal.setAction(() => {
        api.deleteCard(id)
          .then((res) => {
            console.log(`card is deleted:`, res)
            card.removeCard();
          })
      })
    }
  },
  cardTemplate);
  return card.createCard();
};

const editFormValidator = new FormValidator(config, profileFormPopup);
const addCardFormValidator = new FormValidator(config, cardFormPopup);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const items = initialCards;
// const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
// cards.renderer();
api.getInitialCards()
.then(items => {
  const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
  cards.renderer();
})

api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({name: res.name, about: res.about})
  })

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
  const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
  const data = popupWithAddCard.getInputsValues()
  api.createCard(data)
    .then(res => {
      cards.addItem(addNewCard(res));
      popupWithAddCard.close();
    });
})
  
popupWithAddCard.setEventListeners();

const openAddCardForm = document.querySelector(".profile__add-button");
openAddCardForm.addEventListener("click", () => {
  popupWithAddCard.open();
  addCardFormValidator.resetValidation();
});
