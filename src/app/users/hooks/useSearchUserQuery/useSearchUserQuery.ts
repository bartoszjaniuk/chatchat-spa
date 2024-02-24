import { useQuery } from "@tanstack/react-query";
import { userServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { userService } from "src/app/api/services/userService/user.service";
import { StringParam, useQueryParams } from "use-query-params";

export const UserParams = {
	"user.email": StringParam,
	"user.id": StringParam,
	"user.username": StringParam,
};
export const useSearchUserQuery = () => {
	const [query] = useQueryParams(UserParams);

	const params = {
		email: query["user.email"] ?? undefined,
		id: query["user.id"] ?? undefined,
		username: query["user.username"] ?? undefined,
	};

	const isEnabled = Object.values(query).some((v) => v);

	return useQuery({
		queryKey: [userServiceQueryKeys.filteredUsers(params)],
		queryFn: () => userService.getFilteredUsers(params),
		enabled: isEnabled,
	});
};
