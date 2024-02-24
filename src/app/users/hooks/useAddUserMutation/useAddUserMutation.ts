import { useMutation } from "@tanstack/react-query";
import { userService } from "src/app/api/services/userService/user.service";

export const useAddUserMutation = () => {
	return useMutation({
		mutationFn: userService.addFriend,
	});
};
