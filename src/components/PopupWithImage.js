import Popup from "../components/Popup.js";
// import { popupDescription, popupImage, popupImageDescription } from "../utils/constants.js";
// import * as constants from "../../src/utils/constants.js";

class PopupWithImage extends Popup {

  constructor(popupSelector, popupImage, popupImageDescription) {
    super(popupSelector); // this._popup
    this._popupImage = this._popup.querySelector(popupImage);
    this._imageDescription = this._popup.querySelector(popupImageDescription);
  }

  open(cardData) {
    super.open();
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.name;
    this._imageDescription.textContent = cardData.name;
  }
}

export default PopupWithImage;
