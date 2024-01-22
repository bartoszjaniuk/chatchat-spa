import { useQuery } from "@tanstack/react-query";
import { userServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { userService } from "src/app/api/services/userService/user.service";

const useAppUsers = () => {
	const { data, isLoading } = useQuery({
		queryKey: [userServiceQueryKeys.appUsers()],
		queryFn: userService.getAppUsers,
	});

	return { data, isLoading };
};

export const AppUsers = () => {
	const { data, isLoading } = useAppUsers();

	if (isLoading) return <div>Loading Users ...</div>;
	console.log(data);

	return <div>AppUsers</div>;
};
