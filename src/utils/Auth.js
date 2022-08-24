class Auth {
	constructor(options) {
		this._baseURL = options.baseUrl;
		this._headers = options.headers;
	}

	register(data) {
		return fetch(`${this._baseUrl}/signup`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(data)
		})
			.then(this._checkResponseStatus)
			// .then((response) => {
			// 	try {
			// 		if (response.status === 200) {
			// 			return response.json();
			// 		}
			// 	} catch (e) {
			// 		return (e)
			// 	}
			// })
			.then((data) => {
				// сохраняем токен
				localStorage.setItem('token', data.token);
			})
	}

	authorize({ email, password }) {
		return fetch(`${this._baseUrl}/signin`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ email, password })
		})
			.then(this._checkResponseStatus)
	}

	getContent(token) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
			.then(this._checkResponseStatus)
	}

	_checkResponseStatus(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	}

}

const auth = new Auth({
	baseUrl: 'https://auth.nomoreparties.co',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default auth;