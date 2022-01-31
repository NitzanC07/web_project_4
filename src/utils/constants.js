export const cardTemplate = document.querySelector("#card-template").content;
export const cardsContainer = ".cards__container";

// Form Validation classes.
export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input_error-visible",
  formSelector: ".popup__form"
};

export const profileFormPopup = ".popup__form_profile";
export const changeAvatarPopupSelector = ".popup_type_avatar";
export const profileFormPopupSelector = ".popup_type_edit-profile";
export const cardFormPopup = ".popup__form_add-card";
export const cardFormPopupSelector = ".popup_type_add-card";
export const popupForDeleteCard = ".popup_type_delete-card";
export const profileName = document.querySelector(".profile__name");
export const avatarPicture = document.querySelector(".profile__avatar-picture");
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
