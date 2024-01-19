import { authService } from "../services/authService/authService.service";

export const refreshToken = () => {
	return new Promise((resolve, reject) => {
		authService
			.getSession()
			.then((response) => {
				resolve(response);
			})
			.catch(() => {
				reject();
			});
	});
};
