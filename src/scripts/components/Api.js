export default class Api {
    constructor(apiConfig) {
        this._url = apiConfig.baseUrl;
        this._headers = apiConfig.headers;
        this._authorization = this._headers.authorization;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject)
    }

    
}