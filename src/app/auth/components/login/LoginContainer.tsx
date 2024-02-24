import { useAuth } from "src/app/providers/authProvider/AuthProvider";
import { Login, useLogin } from "../..";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";
import { useEffect } from "react";

export const LoginContainer = () => {
	const { authStatus } = useAuth();
	const { signIn } = useLogin();
	const navigate = useNavigate();

	useEffect(() => {
		if (authStatus === "authorized") {
			navigate(AppRoutes.HOME);
		}
	}, [authStatus, navigate]);

	return <Login signIn={signIn} />;
};
