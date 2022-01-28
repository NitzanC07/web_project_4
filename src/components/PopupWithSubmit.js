import Popup from "../components/Popup.js";

class PopupWithSubmit extends Popup {
  setAction(action) {
      this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }

}

export default PopupWithSubmit;