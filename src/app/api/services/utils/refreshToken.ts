import { getAuthApiService } from "../authService/authService.service";

export const refreshToken = () => {
	return new Promise((resolve, reject) => {
		getAuthApiService()
			.getSession()
			.then((response) => {
				resolve(response);
			})
			.catch(() => {
				reject();
			});
	});
};
