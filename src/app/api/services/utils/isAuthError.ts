import { isAxiosError } from "axios";

const authErrorStatusCodes = [401, 403];

export const isAuthError = (error: unknown) => {
	if (isAxiosError(error) && error?.response?.status) {
		const status = error?.response?.status;
		return !!(status && authErrorStatusCodes.includes(status));
	}

	return false;
};
