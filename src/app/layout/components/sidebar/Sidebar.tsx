import { useNavigate } from "react-router-dom";
import { useLogout } from "src/app/auth/hooks/useLogout/useLogout";
import LogoUrl from "src/assets/chatchat-logo.png";
import { SingleButton } from "../singleButton/SingleButton";
import { EmojiIcon } from "../emojiIcon/EmojiIcon";
import { useActionsContext } from "src/app/providers/authProvider/AuthProvider";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";

export const Sidebar = () => {
	const { refetch } = useLogout();
	const navigate = useNavigate();
	const dispatch = useActionsContext();

	const handleLogout = () => {
		dispatch({ type: "CLEAR_SESSION" });
		refetch();
		navigate(AppRoutes.AUTH_LOGIN);
	};

	return (
		<div
			className={`h-16 w-full absolute left-0 bottom-0 border border-r
			md:h-full md:w-56 md:fixed`}
		>
			<div className="hidden md:flex w-full flex-col items-center  justify-around pb-4">
				<img className="w-16 h-16" src={LogoUrl} alt="Chat Chat Logo" />
				<p className="text-2xl ">Chat Chat</p>
			</div>
			<div className="flex h-full md:flex-col">
				<SingleButton
					onClick={() => {
						navigate("/search");
					}}
					icon={<EmojiIcon>🔍</EmojiIcon>}
				>
					Search
				</SingleButton>
				<SingleButton
					onClick={() => {
						navigate("/users");
					}}
					icon={<EmojiIcon>🍻</EmojiIcon>}
				>
					Friends
				</SingleButton>

				<SingleButton
					onClick={() => {
						navigate("/messages");
					}}
					icon={<EmojiIcon>📖</EmojiIcon>}
				>
					Messages
				</SingleButton>
				<SingleButton icon={<EmojiIcon>🙎🏻‍♂️</EmojiIcon>}>Profile</SingleButton>
				<SingleButton onClick={handleLogout} icon={<EmojiIcon>🏃🏻‍♂️</EmojiIcon>}>
					Logout
				</SingleButton>
			</div>
		</div>
	);
};
