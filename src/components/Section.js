export class Section {
  constructor({items, renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector),
    this._items = items,
    this._renderer = renderer
  };

  rendererItems() {
    this._items.forEach(item => {
      this.addItem(this._renderer(item))
    });
  };

  addItem(item) {
    this._container.prepend(item)
  };
};
