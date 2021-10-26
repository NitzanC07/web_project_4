import { profileName, profileDescription } from "../utils/constants.js";

class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  // Public method which returns an object with information about the user.
  getUserInfo() {
    this._data = { name: this._name.textContent, about: this._job.textContent };
    return this._data;
  }

  // Public method which takes new user data and adds it on the page.
  setUserInfo(newCardData) {
    this._name.textContent = newCardData.name;
    this._job.textContent = newCardData.about;
  }
}

export default UserInfo;
