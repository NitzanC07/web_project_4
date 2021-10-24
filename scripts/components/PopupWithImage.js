import Popup from '../components/Popup.js';
import * as constants from '../utils/constants.js';

class PopupWithImage extends Popup {
    constructor(name, link) {
        super();
        this._name = name;
        this._link = link;
    }
    open() {
        constants.popupImage.src = this._link;
        constants.popupImage.alt = this._name;
        constants.popupImageDescription.textContent = this._name;
    }
}

export default PopupWithImage;