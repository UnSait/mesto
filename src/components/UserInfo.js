export class UserInfo {
  constructor({nameSelector, infoSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector)
  };

  getUserInfo() {
    return {
      userName: this._nameSelector.textContent,
      userInfo: this._infoSelector.textContent
    };
  };

  setUserInfo(name, info) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = info
  };

};
