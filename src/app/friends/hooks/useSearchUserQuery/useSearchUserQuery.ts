import { useQuery } from "@tanstack/react-query";
import { userServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { userService } from "src/app/api/services/userService/user.service";
import { StringParam } from "use-query-params";
import { useFilteredUsersParams } from "../useFilteredUsersParams/useFilteredUsersParams";

export const UserParams = {
	"user.email": StringParam,
	"user.id": StringParam,
	"user.username": StringParam,
};
export const useSearchUserQuery = () => {
	const { params, query } = useFilteredUsersParams();
	const isEnabled = Object.values(query).some((v) => v);

	return useQuery({
		queryKey: userServiceQueryKeys.filteredUsers(params),
		queryFn: () => userService.getFilteredUsers(params),
		enabled: isEnabled,
	});
};
