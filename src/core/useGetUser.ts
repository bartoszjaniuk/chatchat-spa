import { userService } from "./../app/api/services/userService/user.service";
import { userServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (enabled?: boolean) => {
	const { data, error, isLoading, isSuccess } = useQuery({
		queryKey: [userServiceQueryKeys.user()],
		queryFn: userService.getUser,
		enabled: enabled,
	});

	return { data, error, isLoading, isSuccess };
};
