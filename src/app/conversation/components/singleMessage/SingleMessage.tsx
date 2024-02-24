export const SingleMessage = ({
	message,
	isCurrentUser,
}: {
	message: string;
	email: string;
	isCurrentUser: boolean;
}) => {
	return (
		<div
			className={`border border-gray-600 bg-gray-600 text-white w-fit p-2 rounded-xl flex ${
				isCurrentUser ? "self-start" : "self-end"
			}`}
		>
			{message}
		</div>
	);
};
