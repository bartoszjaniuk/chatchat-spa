import { useNavigate } from "react-router-dom";
import { Login } from "..";
import { useLogin } from "../hooks";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { AppRoutes } from "src/router/appRoutes.enum";

export const LoginContainer = () => {
	const { mutate } = useLogin();
	const navigate = useNavigate();

	const signIn = (userCredentials: UserCredentials) => {
		mutate(userCredentials);
		navigate(AppRoutes.HOME);
	};
	return <Login signIn={signIn} />;
};
