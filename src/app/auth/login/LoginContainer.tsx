import { useEffect } from "react";
import { Login } from "..";
import { useAuth } from "src/app/shared";
import { AppRoutes } from "src/router/router.consts";

const navigate = (url: string) => window.location.assign(url);

export const LoginContainer = () => {
	const { token, login } = useAuth();

	useEffect(() => {
		if (!token) return;
		navigate(AppRoutes.HOME);
	}, [token]);

	return <Login signIn={login} />;
};
