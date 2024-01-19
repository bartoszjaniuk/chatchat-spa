import { type AxiosError } from "axios";

import { redirectUnauthorizedUser } from "./redirectUnauthorizedUser";

export enum ErrorStatus {
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
}

export const AuthInterceptor = (err: AxiosError) => {
	const status = err?.response?.status;

	if (
		[ErrorStatus.UNAUTHORIZED, ErrorStatus.FORBIDDEN].includes(Number(status))
	) {
		console.log({ status });
		redirectUnauthorizedUser();
	}

	return Promise.reject(err);
};
