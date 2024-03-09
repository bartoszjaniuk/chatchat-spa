import { useQuery } from "@tanstack/react-query";
import { userService } from "src/app/api";

export const useFriendsQuery = () => {
	return useQuery({
		queryKey: ["users/friends"],
		queryFn: userService.getFriends,
	});
};
