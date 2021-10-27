import havana from '../images/havana.jpg';
import vinales from '../images/vinales.jpg';
import pelican from '../images/pelican.jpg'
import ardeaHerodias from '../images/ardea-herodias.jpg';
import viewFromManara from '../images/view-from-manara.jpg';
import biriyaForest from '../images/biriya-forest.jpg';

// Initialization cards on loading page.
export const initialCards = [
  {
    name: "Oldies cars in Havana, Cuba.",
    link: havana
  },
  {
    name: "Tobacco field in Viñales valley, Cuba.",
    link: vinales
  },
  {
    name: "Pelican in a lake, Sarasota FL, USA.",
    link: pelican
  },
  {
    name: "Great blue heron, Sarasota FL, USA.",
    link: ardeaHerodias
  },
  {
    name: "Sight from Manara to southern Lebanon in winter , Israel.",
    link: viewFromManara
  },
  {
    name: "Biriya forest, Zefat, Israel",
    link: biriyaForest
  }
];

export const cardTemplate = document.querySelector("#card-template").content;
export const cardsContainer = ".cards__container";

// Form Validation classes.
export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_error-visible",
};

export const profileFormPopup = ".popup__form_profile";
export const profileFormPopupSelector = ".popup_type_edit-profile";
export const cardFormPopup = ".popup__form_add-card";
export const cardFormPopupSelector = ".popup_type_add-card";
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const popupName = document.querySelector(".popup__input_content_name");
export const popupDescription = document.querySelector(
  ".popup__input_content_description"
);

// Image popup.
export const popupTypeImageSelector = ".popup_type_image";
// export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const popupImageDescription = document.querySelector(
  ".popup__image-description"
);
