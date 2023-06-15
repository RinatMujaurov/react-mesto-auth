
class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._headers = {
      authorization: token,
      "Content-Type": "application/json",
    };
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

  getUserInfo() {
    return this._request(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  setUserInfo(data) {
    return this._request(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  getInitialCards() {
    return this._request(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    });
  }

  addCard(data) {
    return this._request(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._request(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  putLike(cardId) {
    return this._request(this._baseUrl + "/cards/" + cardId + "/likes", {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(cardId) {
    return this._request(this._baseUrl + "/cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (!isLiked) {
      return this.putLike(cardId);
    }
    return this.deleteLike(cardId);
  }

  setAvatar(data) {
    return this._request(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-63",
  "cab53664-e4e9-4b11-babc-f697c128a306"
);

export default api;
