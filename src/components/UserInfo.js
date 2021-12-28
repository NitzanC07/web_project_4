import { profileName, profileDescription } from "../../src/utils/constants.js";

class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  // Public method which returns an object with information about the user.
  getUserInfo() {
    return { name: this._name.textContent, about: this._job.textContent };
  }

  // Public method which takes new user data and adds it on the page.
  setUserInfo(newCardData) {
    this._name.textContent = newCardData.name;
    this._job.textContent = newCardData.about;
  }
}

export default UserInfo;