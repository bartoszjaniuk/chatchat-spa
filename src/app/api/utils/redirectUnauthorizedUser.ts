import { AppRoutes } from "src/app/router/enums/appRoutes.enum";

export const redirectUnauthorizedUser = () => {
	return window.location.assign(AppRoutes.AUTH_LOGIN);
};
