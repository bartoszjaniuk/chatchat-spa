export class JwtService {
	getToken() {
		try {
			const item = localStorage.getItem("jwt");
			return item ? JSON.parse(item) : item;
		} catch (_) {
			return;
		}
	}

	setToken(value: unknown) {
		try {
			localStorage.setItem("jwt", JSON.stringify(value));
		} catch (_) {
			return;
		}
	}

	removeToken() {
		try {
			localStorage.removeItem("jwt");
		} catch (_) {
			return;
		}
	}
}

export const jwtService = new JwtService();
