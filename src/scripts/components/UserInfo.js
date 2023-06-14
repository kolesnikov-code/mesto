export default class UserInfo {
    constructor({ userNameSelector, userAboutSelfSelector, userAvatarImageSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userAboutSelf = document.querySelector(userAboutSelfSelector);
        this._userAvatarImage = document.querySelector(userAvatarImageSelector);
    };

    getUserInfo() {
        return {username: this._userName.textContent, aboutself: this._userAboutSelf.textContent}
    };

    setUserInfo({ avatar, username, aboutself }) {
        this._userAvatarImage.src = avatar;
        this._userName.textContent = username;
        this._userAboutSelf.textContent = aboutself;
    };
}