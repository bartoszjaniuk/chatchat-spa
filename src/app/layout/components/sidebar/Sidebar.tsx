import { useNavigate } from "react-router-dom";
import { useLogout } from "src/app/auth/hooks/useLogout/useLogout";
import LogoUrl from "src/assets/chatchat-logo.png";
import { SingleButton } from "../singleButton/SingleButton";
import { EmojiIcon } from "../emojiIcon/EmojiIcon";
import { useActionsContext } from "src/app/providers/authProvider/AuthProvider";

export const Sidebar = () => {
	const { refetch } = useLogout();
	const navigate = useNavigate();
	const dispatch = useActionsContext();

	const logout = () => {
		refetch();
		dispatch({ type: "CLEAR_SESSION" });
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
						navigate("/users/all");
					}}
					icon={<EmojiIcon>🍻</EmojiIcon>}
				>
					Friends
				</SingleButton>
				<SingleButton icon={<EmojiIcon>📖</EmojiIcon>}>Messages</SingleButton>
				<SingleButton icon={<EmojiIcon>🙎🏻‍♂️</EmojiIcon>}>Profile</SingleButton>
				<SingleButton onClick={logout} icon={<EmojiIcon>🏃🏻‍♂️</EmojiIcon>}>
					Logout
				</SingleButton>
			</div>
		</div>
	);
};
