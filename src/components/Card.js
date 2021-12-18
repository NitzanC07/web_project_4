class Card {
  constructor({data, handleCardClick, handleDeleteCard}, cardTemplate) {
    this._template = cardTemplate;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._id = data._id;
  }

  _setEventListeners() {
    // Like buttons.
    const likeButton =  this._card.querySelector(".cards__like-button");
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("cards__like-button_active");
      });

    // Delete buttons.
    this._card.querySelector(".cards__delete-button")
      .addEventListener("click", () =>  this._handleDeleteCard(this._id));

    // Show image as popup.
    const cardData = { name: this._name, link: this._link };
    this._card.querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleCardClick(cardData);
      });
  }
    
  removeCard() {
    this._card.remove();
    this._card = null;
  }
      
    

  createCard() {
    const card = this._template
      .querySelector(".cards__card")
      .cloneNode(true);
    const img = card.querySelector(".cards__image");
    img.setAttribute("src", this._link);
    img.setAttribute("alt", this._name);

    const cardTitle = card.querySelector(".cards__header");
    cardTitle.textContent = this._name;

    this._card = card;
    this._setEventListeners();
    return this._card;
  }
}

export default Card;
