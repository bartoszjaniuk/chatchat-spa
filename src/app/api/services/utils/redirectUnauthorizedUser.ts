import { AppRoutes } from "src/router/AppRouter";

export const redirectUnauthorizedUser = () => {
	return window.location.assign(AppRoutes.AUTH_LOGIN);
};
