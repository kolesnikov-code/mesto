export default class UserInfo {
    constructor({ userNameSelector, userAboutSelfSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userAboutSelf = document.querySelector(userAboutSelfSelector);
    };

    getUserInfo() {
        return {username: this._userName.textContent, aboutself: this._userAboutSelf.textContent}
    };

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.username;
        this._userAboutSelf.textContent = userInfo.aboutself;
    };
}