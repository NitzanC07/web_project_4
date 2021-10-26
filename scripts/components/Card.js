class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._template = cardTemplate;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    // Like buttons.
    const likeButton = this._newCard.querySelector(".cards__like-button");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("cards__like-button_active");
    });

    // Delete buttons.
    const deleteButton = this._newCard.querySelector(".cards__delete-button");
    deleteButton.addEventListener("click", () => {
      this._newCard.remove();
      this._newCard = null;
    });

    // Show image as popup.
    const cardData = { name: this._name, link: this._link };
    const cardImage = this._newCard.querySelector(".cards__image");
    cardImage.addEventListener("click", () => {
      this._handleCardClick(cardData);
    });
  }

  createCard() {
    const newCard = this._template
      .querySelector(".cards__card")
      .cloneNode(true);
    const img = newCard.querySelector(".cards__image");
    img.setAttribute("src", this._link);
    img.setAttribute("alt", this._name);

    const cardTitle = newCard.querySelector(".cards__header");
    cardTitle.textContent = this._name;

    this._newCard = newCard;
    this._setEventListeners();
    return this._newCard;
  }
}

export default Card;
