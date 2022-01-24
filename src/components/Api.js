const customFetch = (url, headers) =>
  fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(err => console.log(err))

class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

  // other methods for working with the API

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: 'GET' // default option
    })
  }
  
  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: 'GET'
    })
  }

  changeAvatar(newAvatar) {
    return customFetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(newAvatar)
    })
  }

  setUserInfo(data) {
    return customFetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
    })
  }

  createCard(data) {
    return customFetch(`${this._baseUrl}/cards`, {
        headers: this._headers, 
        method: 'POST',
        body: JSON.stringify(data)
    })
  }

  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers, 
        method: 'DELETE',
    })
  }

  likeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers, 
        method: 'PUT',
    })
  }

  dislikeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers, 
        method: 'DELETE',
    })
  }

}

export default Api;