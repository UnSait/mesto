import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  open(link, name) {
    const image = this._popup.querySelector('.popup__place-photo');
    const caption = this._popup.querySelector('.popup__place-name');
    image.src = link;
    image.alt = name;
    caption.textContent = name;
    super.open();
  };
};

