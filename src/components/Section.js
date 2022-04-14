export class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector),
    this._renderer = renderer
  };

  rendererItems(items) {
    items.forEach(item => {
      this.addItem(this._renderer(item))
    });
  };

  addItem(item) {
    this._container.prepend(item)
  };
};
