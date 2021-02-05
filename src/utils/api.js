class Api {
  constructor({ url, headers }) {
    this._headers = headers
    this._url = url
  }

  sendMail(letter) {
    return fetch(`${this._url}/send-mail`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        letter: letter
      }),
    }).then((result) => {
      if (result.ok) {
        return result.json()
      } else return Promise.reject(`Что-то пошло не так: ${result.status}`)
    })
  }
}

const api = new Api({
  url: 'https://solnishshka.xyz',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
