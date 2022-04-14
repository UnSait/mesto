export class UserInfo {
  constructor({nameSelector, infoSelector, avatarSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  };

  getUserInfo() {
    return {
      userName: this._nameSelector.textContent,
      userInfo: this._infoSelector.textContent
    };
  };

  setUserInfo({name, about}) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = about;
  };

  setUserAvatar({avatar}) {
    this._avatarSelector.src = avatar;
  };

};
