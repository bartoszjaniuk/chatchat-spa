import { useQuery } from "@tanstack/react-query";
import { authServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { authService } from "src/app/api/services/authService/authService.service";

export const useLogout = () => {
	return useQuery({
		queryKey: [authServiceQueryKeys.logout()],
		queryFn: authService.logout,
		enabled: false,
	});
};
