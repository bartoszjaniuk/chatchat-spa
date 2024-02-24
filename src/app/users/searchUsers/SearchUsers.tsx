import { useAddUserMutation } from "../hooks/useAddUserMutation/useAddUserMutation";
import { SearchResult } from "../components/searchResult/SearchResult";
import { SearchInput } from "../components/searchInput/SearchInput";
import { useSearchUserQuery } from "../hooks/useSearchUserQuery/useSearchUserQuery";

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
								<SearchResult
									onClick={mutateAddUserToFriends}
									user={user}
									key={user.id}
								/>
							))}
						</ul>
					)}
				</>
			)}
		</div>
	);
};
