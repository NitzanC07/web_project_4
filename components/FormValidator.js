// Sprint 7 - project Live Coding, Liza - time on video: 0:00 - 40:00 mins.

class FormValidator {
    constructor (settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    };

    _showErrorMessage (input, errorMessage) {
        const {inputErrorClass, errorClass} = this._settings;
        this._errorElement = this._formElement.querySelector(`.${input.id}-error`);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(inputErrorClass);
        input.classList.add(errorClass);
    }
    
    _hideErrorMessage (input) {
        const {inputErrorClass, errorClass} = this._settings;
        this._errorElement = this._formElement.querySelector(`.${input.id}-error`);
        this._errorElement.textContent = "";
        this._errorElement.classList.remove(inputErrorClass);
        input.classList.remove(errorClass);
    }

    _checkInputValidity(input) {
        if(!input.validity.valid){
            const errorMessage = input.validationMessage;
            this._showErrorMessage(input, errorMessage);
        }
        else{
            this._hideErrorMessage(input)
        }
    }

    _inputsList() {
        const { inputSelector } = this._settings;
        const inputsList = Array.from(this._formElement.querySelectorAll(inputSelector));
        return inputsList;
    }

    _selectButton() {
        const { submitButtonSelector } = this._settings;
        const button = this._formElement.querySelector(submitButtonSelector);
        return button;
    }

    _toggleButtonState () {
        const { inactiveButtonClass} = this._settings;
        const button = this._selectButton();
        const inputList = this._inputsList();
        const isFormInvalid = inputList.some((inputElement) => !inputElement.validity.valid);
        if (!isFormInvalid) {
            button.classList.remove(inactiveButtonClass);
            button.removeAttribute("disabled");
        } else {
            button.classList.add(inactiveButtonClass);
            button.setAttribute("disabled", true);
        }
    }

    _setEventListeners() {
        const inputsList  = this._inputsList();
        inputsList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    }

    enableValidation(){
        this._formElement.addEventListener("submit", (event) => {
            event.preventDefault();
        });
        this._setEventListeners();
    };

    resetValidation() {
        const { inactiveButtonClass } = this._settings;
        const button = this._selectButton();
        button.classList.add(inactiveButtonClass);
        button.setAttribute("disabled","true");
        const inputsList = this._inputsList();
        inputsList.forEach((inputElement) => {
            this._hideErrorMessage(inputElement);
        });
      };
};

export { FormValidator };

