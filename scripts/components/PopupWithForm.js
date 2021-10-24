import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector); // this._popup
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector(".popup__form");
    }

    // Private method which collect data from all the input fields.
    _getInputsValues() {
        const inputs = Array.from(this._form.querySelectorAll(".popup__input"));
        const inputsValues = {};
        inputs.forEach(input => {
            inputsValues[input.name] = input.value;
        });
        return inputsValues;
    }

    // Modifies the parent method and add event listener to close icon and submit button.
    setEventListener() {
        super.setEventListeners();
        this._form.addEventListener("submit", () => this._submitHandler(this._getInputsValues()));
    }

    // Modifies the parent method in order to reset the form once the popup is closed.
    close() {
        super.close();
        this._form.reset()

    }
}

export default PopupWithForm;