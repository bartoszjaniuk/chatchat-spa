import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "src/app/api/services/userService/user.service";
import { useFilteredUsersParams } from "../..";
import { FilteredUser, userServiceQueryKeys } from "src/app/api";

export const useAddUserMutation = () => {
	const queryClient = useQueryClient();
	const { params } = useFilteredUsersParams();
	const filteredUsersQueryKey = userServiceQueryKeys.filteredUsers(params);

	return useMutation({
		mutationFn: userService.addFriend,
		onSettled: async (newUser) => {
			const previousUsers = queryClient.getQueryData<FilteredUser[] | []>(
				filteredUsersQueryKey,
			);

			if (!previousUsers?.length) return previousUsers;

			queryClient.setQueryData<FilteredUser[]>(
				filteredUsersQueryKey,
				(oldUsers) => {
					if (!oldUsers?.length) return oldUsers;
					return oldUsers.map((oldUser) => {
						if (oldUser.id === newUser.id)
							return {
								...newUser,
								isFriend: true,
							};
						return oldUser;
					});
				},
			);
		},
	});
};
