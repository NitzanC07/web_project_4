import Popup from "../components/Popup.js";
import * as constants from "../utils/constants.js";

class PopupWithImage extends Popup {
  open(cardData) {
    super.open();
    constants.popupImage.src = cardData.link;
    constants.popupImage.alt = cardData.name;
    constants.popupImageDescription.textContent = cardData.name;
  }
}

export default PopupWithImage;
