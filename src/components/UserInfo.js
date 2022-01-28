class UserInfo {
  constructor(name, job, avatar) {
    this._name = name;
    this._job = job;
    this._avatar = avatar;
  }

  // Public method which returns an object with information about the user.
  getUserInfo() {
    return { name: this._name.textContent, about: this._job.textContent };
  }

  // Public method which takes new user data and adds it on the page.
  setUserInfo(newData) {
    this._name.textContent = newData.name;
    this._job.textContent = newData.about;
  }
  // Public method which input the new avatar to the page.
  setUserAvatar(newAvatar) {
    this._avatar.style = `background-image: url(${newAvatar});`
  }
}

export default UserInfo;
