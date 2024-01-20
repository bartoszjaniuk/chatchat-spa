import { useNavigate } from "react-router-dom";
import { authService } from "src/app/api/services/authService/authService.service";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { AppRoutes } from "src/router/appRoutes.enum";
import { useActionsContext } from "../../auth.container";

// TODO: Move it into AuthProvider
export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useActionsContext();
	const signIn = async (payload: UserCredentials) => {
		dispatch({ type: "SET_AUTH_STATE", payload: "loading" });
		try {
			const response = await authService.login(payload);
			dispatch({ type: "SET_USER", payload: response.user });
			navigate(AppRoutes.HOME);
		} catch (error) {
			console.log(error);
		}
	};

	return { signIn };
};
