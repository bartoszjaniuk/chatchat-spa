import { AxiosInstance, isAxiosError } from "axios";
import { isAuthError } from "./isAuthError";

type RefreshLogicFn = () => Promise<unknown>;

type RedirectUnauthorizedUser = VoidFunction;

export const refreshInterceptor =
	(
		api: AxiosInstance,
		refreshTokenLogic: RefreshLogicFn,
		redirectUnauthorizedUser: RedirectUnauthorizedUser,
	) =>
	async (error: unknown) => {
		if (!isAxiosError(error)) return;
		const originalRequest = error.config;

		if (isAuthError(error) && originalRequest && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				await refreshTokenLogic();
			} catch (e: unknown) {
				redirectUnauthorizedUser();
				return;
			}

			return api(originalRequest);
		}
		return Promise.reject(error);
	};
