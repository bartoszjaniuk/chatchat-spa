import { Link } from "react-router-dom";
import { UserThreads } from "src/app/api";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";
import { formatDate } from "../../utils/formatDate";

export const Thread = ({
	title,
	chatId,
	lastMessage,
	messageLastUpdatedAt,
}: UserThreads) => {
	return (
		<Link
			to={`${AppRoutes.THREADS}/${chatId}`}
			className="border w-full h-20 flex items-center justify-between pl-4  hover:cursor-pointer"
		>
			<div className="">
				<h5 className="text-lg font-medium">Title: {title}</h5>
				{lastMessage && (
					<p>
						{lastMessage?.author}: {lastMessage?.content}
					</p>
				)}
			</div>
			<div className="h-full p-4">
				<p>{formatDate(messageLastUpdatedAt)}</p>
			</div>
		</Link>
	);
};
