export default class Api {
    constructor(apiConfig) {
        this._url = apiConfig.baseUrl;
        this._headers = apiConfig.headers;
        this._authorization = this._headers.authorization;
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    };

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    };

    addNewCard(newCardData) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
              authorization: this._authorization,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newCardData.title,
              link: newCardData.link,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    };

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this._authorization
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }

    editUserInfo(newUserData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: this._authorization,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newUserData.username,
              about: newUserData.aboutself,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    };

    editUserAvatar(newUserData) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this._authorization,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: newUserData.avatarlink,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    };


}