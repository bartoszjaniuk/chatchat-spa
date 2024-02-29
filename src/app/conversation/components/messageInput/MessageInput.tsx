import { ChangeEvent, useState } from "react";
import { useSendMessage } from "src/app/providers/webSocketProvider/hooks/useSendMessage/useSendMessage";

type MessageInputProps = {
	handleTyping: VoidFunction;
	userId: number | undefined;
};

export const MessageInput = ({ handleTyping, userId }: MessageInputProps) => {
	const [message, setMessage] = useState<string>("");
	const { sendMessage } = useSendMessage(userId);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		handleTyping();
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendMessage(message);
			setMessage("");
		}
	};

	return (
		<textarea
			className="h-[50px] md:h-[200px] p-4 bg-gray-100 break-words overflow-auto resize-none"
			id="message"
			value={message}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			placeholder="Write your message"
		/>
	);
};
