import { useNavigate } from "react-router-dom";
import { UserThreads } from "src/app/api";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";
import { formatDate } from "../../utils/formatDate";

export const Thread = ({
	title,
	chatId,
	lastMessage,
	messageLastUpdatedAt,
}: UserThreads) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${AppRoutes.MESSAGES}/${chatId}`);
	};

	return (
		<div
			onClick={handleClick}
			className="border border-purple-300 w-full h-20 flex items-center justify-between pl-4  hover:cursor-pointer"
		>
			<div className="">
				<h5 className="text-lg font-medium">Title: {title}</h5>
				<p>
					{lastMessage?.author}: {lastMessage?.content}
				</p>
			</div>
			<div className="h-full p-4">
				<p>{formatDate(messageLastUpdatedAt)}</p>
			</div>
		</div>
	);
};
