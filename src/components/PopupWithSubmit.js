import Popup from "../components/Popup.js";

class PopupWithSubmit extends Popup {
  setAction(action) {
      this._submitHandler = action;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler();
      this.close();
    });
  }

}

export default PopupWithSubmit;