import { useFriendsQuery } from "./hooks/useFriendsQuery/useFriendsQuery";
import { GoComment } from "react-icons/go";
import { useGetOrCreateChatMutation } from "./hooks/useGetOrCreateChatMutation/useGetOrCreateChatMutation";
import { UserTile } from "../shared/components/userTile/UserTile";
// import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../router";

export const Users = () => {
	const { data, isLoading } = useFriendsQuery();
	// const navigate = useNavigate();

	const navigateToChat = (chatId: number) => {
		window.location.assign(`${AppRoutes.MESSAGES}/${chatId}`);
		// navigate(`${AppRoutes.MESSAGES}/${chatId}`);
	};

	const { mutate } = useGetOrCreateChatMutation(navigateToChat);

	const handleClick = async (userId: number, username: string) => {
		mutate({ userId, username });
	};

	if (isLoading) return <div className="p-4">Loading...</div>;

	if (!isLoading && !data?.length)
		return <div className="p-4">You don't have any friends yet</div>;

	return (
		<div className="p-4 flex flex-col gap-1">
			{data?.map((user) => (
				<UserTile
					key={user.id}
					user={user}
					actionButton={
						<button
							className="p-4 flex justify-center items-center"
							onClick={async () => await handleClick(user.id, user.username)}
						>
							<GoComment size={36} />
						</button>
					}
				/>
			))}
		</div>
	);
};
