import { FilteredUser, UserFriend } from "src/app/api";

type UserTileProps = {
	user: FilteredUser | UserFriend;
	actionButton: JSX.Element;
};
export const UserTile = ({ user, actionButton }: UserTileProps) => {
	return (
		<li className="border p-4  my-2 flex items-center justify-between">
			<div className=" w-full flex gap-4 items-center">
				<div className="w-28">
					<img
						className="rounded-full"
						src={
							user.avatar ||
							"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
						}
						alt="User Avatar"
					/>
				</div>
				<div>Email: {user.email}</div>
			</div>
			<div className="px-4">{actionButton}</div>
		</li>
	);
};
