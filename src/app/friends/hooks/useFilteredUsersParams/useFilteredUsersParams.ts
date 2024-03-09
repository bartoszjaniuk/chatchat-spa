import { useQueryParams } from "use-query-params";
import { UserParams } from "../useSearchUserQuery/useSearchUserQuery";

export const useFilteredUsersParams = () => {
	const [query] = useQueryParams(UserParams);
	const params = {
		email: query["user.email"] ?? undefined,
		id: query["user.id"] ?? undefined,
		username: query["user.username"] ?? undefined,
	};

	return { params, query };
};
