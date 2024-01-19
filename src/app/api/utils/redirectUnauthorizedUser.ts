import { AppRoutes } from "src/router/router.consts";

export const redirectUnauthorizedUser = () => {
	return window.location.assign(AppRoutes.AUTH_LOGIN);
};
