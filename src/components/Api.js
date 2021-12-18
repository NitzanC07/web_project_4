// const customFetch = (url, headers) => {
//   fetch(url, headers)
//     .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
//     .catch(err => console.log(err))
// }


class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

  // other methods for working with the API

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(err => console.log(err))
  }
  
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(err => console.log(err))
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers, 
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(err => console.log("Error: ", err))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers, 
        method: 'DELETE',
    })
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
    .catch(err => console.log("Error: ", err))
  }

}
  
  export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
      authorization: "38a23878-64ce-4abb-ae0d-d30d11cc9a38",
      "Content-Type": "application/json"
    }
  });

  // Token: 38a23878-64ce-4abb-ae0d-d30d11cc9a38 Group ID: group-12