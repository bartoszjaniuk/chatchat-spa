import { AppRoutes } from "src/router/appRoutes.enum";

export const redirectUnauthorizedUser = () => {
	return window.location.assign(AppRoutes.AUTH_LOGIN);
};
