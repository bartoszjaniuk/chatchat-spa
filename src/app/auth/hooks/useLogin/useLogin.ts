import { useMutation } from "@tanstack/react-query";
import { authService } from "src/app/api/services/authService/authService.service";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

export const useLogin = () => {
	const mutation = useMutation({
		mutationFn: (payload: UserCredentials) => authService.login(payload),
	});
	return mutation;
};
