import { PropsWithChildren } from "react";
import { useFriendsQuery } from "./hooks/useFriendsQuery/useFriendsQuery";
import { GoComment } from "react-icons/go";
import { useGetOrCreateChatMutation } from "./hooks/useGetOrCreateChatMutation/useGetOrCreateChatMutation";

export const UserTile = ({ children }: PropsWithChildren) => (
	<div className="border p-4 flex w-full items-center justify-between">
		{children}
	</div>
);

export const Users = () => {
	const { data, isLoading } = useFriendsQuery();
	const { mutate } = useGetOrCreateChatMutation();

	const handleClick = (userId: number, username: string) => {
		mutate({ userId, username });
	};

	if (isLoading) return <div className="p-4">Loading...</div>;

	return (
		<div className="p-4 ">
			{data?.map((user) => (
				<UserTile key={user.id}>
					{user.id}: {user.email}
					<button onClick={() => handleClick(user.id, user.username)}>
						<GoComment />
					</button>
				</UserTile>
			))}
		</div>
	);
};
