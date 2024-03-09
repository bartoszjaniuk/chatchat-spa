import { useAddUserMutation } from "../hooks/useAddUserMutation/useAddUserMutation";
import { SearchInput } from "../components/searchInput/SearchInput";
import { useSearchUserQuery } from "../hooks/useSearchUserQuery/useSearchUserQuery";
import { UserTile } from "src/app/shared/components/userTile/UserTile";

export const SearchUsers = () => {
	const { isLoading, data } = useSearchUserQuery();
	const { mutate: mutateAddUserToFriends } = useAddUserMutation();

	return (
		<div className="flex flex-col gap-2 p-4">
			<SearchInput />
			{isLoading && <div>Loading Users ...</div>}
			{!isLoading && (
				<>
					{data?.length === 0 && <div>0 results found</div>}
					{data && data.length > 0 && (
						<ul>
							{data?.map((user) => (
								<UserTile
									key={user.id}
									user={user}
									actionButton={
										<>
											{user.isFriend && <div className="text-2xl">✅</div>}
											{!user.isFriend && (
												<button
													onClick={() =>
														mutateAddUserToFriends(user.id.toString())
													}
													className="border p-4"
												>
													➕
												</button>
											)}
										</>
									}
								/>
							))}
						</ul>
					)}
				</>
			)}
		</div>
	);
};
