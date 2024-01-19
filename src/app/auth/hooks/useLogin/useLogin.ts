import { useNavigate } from "react-router-dom";
import { authService } from "src/app/api/services/authService/authService.service";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { AppRoutes } from "src/router/appRoutes.enum";

export const useLogin = () => {
	const navigate = useNavigate();
	const signIn = async (payload: UserCredentials) => {
		try {
			const response = await authService.login(payload);
			if (response.user) return navigate(AppRoutes.HOME);
		} catch (error) {
			console.log(error);
		}
	};

	return { signIn };
};
