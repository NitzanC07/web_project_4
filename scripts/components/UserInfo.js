import {
    profileName,
    profileDescription,
    popupName,
    popupDescription
} from '../utils/constants.js';

class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }

    // Public method which returns an object with information about the user.
    getUserInfo() {
        popupName.value = this._name;
        popupDescription.value = this._job;
    }

    // Public method which takes new user data and adds it on the page.
    setUserInfo() {
        profileName.textContent = this._name;
        profileDescription.textContent = this._job;
    }
}

export default UserInfo;