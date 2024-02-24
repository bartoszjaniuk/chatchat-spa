import { type AxiosError } from "axios";
import { redirectUnauthorizedUser } from "./redirectUnauthorizedUser";

export enum ErrorStatus {
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
}

export const authInterceptor = (err: AxiosError) => {
	const status = err?.response?.status;

	if (
		[ErrorStatus.UNAUTHORIZED, ErrorStatus.FORBIDDEN].includes(Number(status))
	) {
		return redirectUnauthorizedUser();
	}
	return Promise.reject(err);
};
