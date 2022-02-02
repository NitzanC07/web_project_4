class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  customFetch(url, headers) {
    return fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
  } 

  // other methods for working with the API

  getInitialCards() {
    return this.customFetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: 'GET' // default option
    })
  }
  
  getUserInfo() {
    return this.customFetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: 'GET'
    })
  }

  changeAvatar(newAvatar) {
    return this.customFetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(newAvatar)
    })
  }

  setUserInfo(data) {
    return this.customFetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
    })
  }

  createCard(data) {
    return this.customFetch(`${this._baseUrl}/cards`, {
        headers: this._headers, 
        method: 'POST',
        body: JSON.stringify(data)
    })
  }

  deleteCard(cardId) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers, 
        method: 'DELETE',
    })
  }

  likeCard(cardId) {
    return this.customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers, 
        method: 'PUT',
    })
  }

  dislikeCard(cardId) {
    return this.customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers, 
        method: 'DELETE',
    })
  }

}

export default Api;