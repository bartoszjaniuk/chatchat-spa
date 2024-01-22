import { useAuth } from "src/app/providers/authProvider/AuthProvider";
import { Login } from "..";
import { useLogin } from "../hooks";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/app/router/appRoutes.enum";

export const LoginContainer = () => {
	const { authStatus } = useAuth();
	const { signIn } = useLogin();
	const navigate = useNavigate();

	if (authStatus === "authorized") navigate(AppRoutes.HOME);

	return <Login signIn={signIn} />;
};
