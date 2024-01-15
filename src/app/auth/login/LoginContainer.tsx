import { Login } from "..";
import { useAuth } from "src/app/shared";
import { navigateTo } from "src/app/shared/utils/navigateTo";
import { AppRoutes } from "src/router/router.consts";

export const LoginContainer = () => {
	const { login, token } = useAuth();

	if (token) navigateTo(AppRoutes.HOME);

	return <Login signIn={login} />;
};
