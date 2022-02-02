import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  cardTemplate,
  config,
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
  changeAvatarPopupSelector, 
  popupImage,
  popupImageDescription
} from "../utils/constants.js";
import Card from "../components/Card.js";
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

const formValidators = {}

// Enable validation
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    // Create the name of the form
    const formName = formElement.getAttribute('name')

   // Store a validator by the `name` of the form
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};
enableValidation(config);

const imagePopup = new PopupWithImage(popupTypeImageSelector, popupImage, popupImageDescription);
imagePopup.setEventListeners();

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
        .catch(err => console.log(err));
      } else {
        api.dislikeCard(cardId)
        .then((res) => {
          card.dislikeCard(res.likes)
          console.log("Removed like from card: ", res.likes);
        })
        .catch(err => console.log(err));
      }
    },
    handleDeleteCard: () => {
      popupAskForDelete.open();
      popupAskForDelete.setAction(() => {
        api.deleteCard(data._id)
          .then((res) => {
            console.log("card is deleted", res);
            card.removeCard();
            popupAskForDelete.close();
          })
          .catch(err => console.log(err));
      })
    }
  }, cardTemplate, userId);
  return card.createCard();
};

const cards = new Section({ renderer: addNewCard }, cardsContainer);


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    // console.log("user data", userData);
    userInfo.setUserInfo({name: userData.name, about: userData.about});
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id
    cards.renderer(cardsData);
  })
  .catch(err => {
    console.log(err);
});

  const popupAskForDelete = new PopupWithSubmit(popupForDeleteCard);
  popupAskForDelete.setEventListeners()

// Popup for profile details form.
const userInfo = new UserInfo(profileName, profileDescription, avatarPicture);
const popupWithProfile = new PopupWithForm(profileFormPopupSelector, () => {
const profileData = popupWithProfile.getInputsValues();
  api.setUserInfo(profileData)
  .then((res) => {
    console.log("res", res);
    userInfo.setUserInfo(profileData);
    popupWithProfile.close();
  })
  .catch(err => console.log(err));
});



popupWithProfile.setEventListeners();

const openEditButton = document.querySelector(".profile__edit-button");
openEditButton.addEventListener("click", () => {
  popupWithProfile.open();
  const userData = userInfo.getUserInfo();
  popupName.value = userData.name;
  popupDescription.value = userData.about;
  formValidators["edit-profile"].resetValidation();
});

const avatarPopup = new PopupWithForm(changeAvatarPopupSelector, () => { 
const avatarUrl = avatarPopup.getInputsValues();
  api.changeAvatar(avatarUrl)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.close()
    })
    .catch(err => console.log(err));
});
avatarPopup.setEventListeners();

const openEditAvatar = document.querySelector(".profile__avatar");
openEditAvatar.addEventListener("click", () => {
  avatarPopup.open();
  formValidators["avatar"].resetValidation();
})

// Popup for add card form.
const popupWithAddCard = new PopupWithForm(cardFormPopupSelector, () => {
  const data = popupWithAddCard.getInputsValues()
  
  api.createCard(data)
    .then(item => {
      cards.renderer([item]);
      popupWithAddCard.close();
    })
    .catch(err => console.log(err));
})
  
popupWithAddCard.setEventListeners();

const openAddCardForm = document.querySelector(".profile__add-button");
openAddCardForm.addEventListener("click", () => {
  popupWithAddCard.open();
  formValidators["add-place"].resetValidation();
});
