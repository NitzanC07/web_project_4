import Popup from "../components/Popup.js";
import { popupDescription, popupImage, popupImageDescription } from "../utils/constants.js";
// import * as constants from "../../src/utils/constants.js";

class PopupWithImage extends Popup {
  open(cardData) {
    console.log("card data", cardData, popupImage, popupImageDescription);
    super.open();
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupImageDescription.textContent = cardData.name;
  }
}

export default PopupWithImage;
