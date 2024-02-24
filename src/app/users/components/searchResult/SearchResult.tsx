import { UseMutateFunction } from "@tanstack/react-query";
import { UserAuthResponse } from "src/app/api/services/authService/models/userAuthResponse.types";

type SearchResultProps = {
	user: UserAuthResponse;
	onClick: UseMutateFunction<unknown, Error, string, unknown>;
};

export const SearchResult = ({ user, onClick }: SearchResultProps) => {
	return (
		<li className="border p-4 my-2 flex items-center justify-between">
			<div className=" w-full flex gap-4 items-center">
				<div className="rounded-full w-12">
					<img
						src={
							user.avatar ||
							"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
						}
						alt="User Avatar"
					/>
				</div>
				<div>Email: {user.email}</div>
			</div>
			<div className="px-4">
				{user.isFriend && <div className="text-2xl">✅</div>}
				{!user.isFriend && (
					<button
						onClick={() => onClick(user.id.toString())}
						className="border p-4"
					>
						➕
					</button>
				)}
			</div>
		</li>
	);
};
