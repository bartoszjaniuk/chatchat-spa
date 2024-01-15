import { useQuery } from "@tanstack/react-query";
import { authServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { authService } from "src/app/api/services/authService/authService.service";

export const useSession = (isEnabled?: boolean) => {
	const { data, isLoading, error, refetch, isFetching } = useQuery({
		queryKey: [authServiceQueryKeys.session()],
		queryFn: authService.getSession,
		enabled: isEnabled,
	});

	return { data, isLoading, error, refetch, isFetching };
};
