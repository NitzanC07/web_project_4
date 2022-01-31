class Section {
  constructor({ renderer }, containerSelector) {
    // this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Public method that renders all elements on the page.
  renderer(items) {
    items.forEach((cardData) => {
      const card = this._renderer(cardData);
      this.addItem(card);
    });
  }

  // Public method that takes a DOM element and adds it to the container.
  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}

export default Section;
