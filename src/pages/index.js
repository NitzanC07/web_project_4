import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  cardTemplate,
  profileFormPopup,
  config,
  cardFormPopup,
  cardsContainer,
  profileFormPopupSelector,
  cardFormPopupSelector,
  profileName,
  profileDescription,
  avatarPicture,
  popupTypeImageSelector,
  popupName,
  popupDescription,
  popupForDeleteCard,
  changeAvatarPopupSelector
} from "../utils/constants.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithSubmit from '../components/PopupWithSubmit';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// Token: 38a23878-64ce-4abb-ae0d-d30d11cc9a38 Group ID: group-12
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "38a23878-64ce-4abb-ae0d-d30d11cc9a38",
    "Content-Type": "application/json"
  }
});

let userId;

const imagePopup = new PopupWithImage(popupTypeImageSelector);
imagePopup.setEventListeners();

const editFormValidator = new FormValidator(config, profileFormPopup);
const addCardFormValidator = new FormValidator(config, cardFormPopup);
const avatarFormValidator = new FormValidator(config, changeAvatarPopupSelector);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

api.getInitialCards()
.then(items => {
  const cards = new Section({ items, renderer: addNewCard }, cardsContainer);
  cards.renderer();
})

api.getUserInfo()
  .then(res => {
    console.log("profile detailes from reload page: ", res);
    userInfo.setUserInfo({name: res.name, about: res.about});
    userInfo.setUserAvatar(res.avatar);
    userId = res._id
  })


  const popupAskForDelete = new PopupWithSubmit(popupForDeleteCard);
  popupAskForDelete.setEventListeners()

const addNewCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      imagePopup.open(data);
    },
    handleLikeIcon: (cardId, userId, likesArray) => {
      if (!likesArray.find(user => user._id === userId )) {
        api.likeCard(cardId)
        .then((res) => {
          card.likeCard(res.likes)
          console.log("Added like to card: ", res.likes);
        })
      } else {
        api.dislikeCard(cardId)
        .then((res) => {
          card.dislikeCard(res.likes)
          console.log("Removed like from card: ", res.likes);
        })
      }
    },
    handleDeleteCard: () => {
      popupAskForDelete.open();
      popupAskForDelete.setAction(() => {
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
const userInfo = new UserInfo(profileName, profileDescription, avatarPicture);
const popupWithProfile = new PopupWithForm(profileFormPopupSelector, () => {
  let profileData = popupWithProfile.getInputsValues();
  userInfo.setUserInfo(profileData);
  api.setUserInfo(profileData)
  .then((res) => {
    console.log("res", res);
  })
  
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

const avatarPopup = new PopupWithForm(changeAvatarPopupSelector, () => { 
  let avatarUrl = avatarPopup.getInputsValues();
  // userInfo.setUserAvatar(avatarUrl.link);
  api.changeAvatar(avatarUrl)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
    });
  avatarPopup.close()
});
avatarPopup.setEventListeners();

const openEditAvatar = document.querySelector(".profile__avatar");
openEditAvatar.addEventListener("click", () => {
  avatarPopup.open();
  editFormValidator.resetValidation();
})

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
