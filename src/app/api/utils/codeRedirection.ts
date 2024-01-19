import { isAxiosError } from "./isAxiosError";
import { redirectUnauthorizedUser } from "./redirectUnauthorizedUser";

/**
 * @description Interceptor that redirects to a given path if the error code matches the given one
 */
export const codeRedirectionInterceptor = () => (error: unknown) => {
	console.log(error, "codeRedirectionInterceptor");
	if (!isAxiosError(error)) {
		return Promise.reject(error);
	}

	if (error.response?.status === 401) return redirectUnauthorizedUser();

	return Promise.reject(error);
};
