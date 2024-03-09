import { useParams } from "react-router-dom";
import { useWebSocket } from "../../WebSocketProvider";

export const useSendMessage = (authorId: number | undefined) => {
	const { socket } = useWebSocket();
	const params = useParams();
	const chatId = params.id;

	const sendMessage = (content: string) => {
		if (authorId && chatId)
			socket?.emit("sendMessage", {
				chatId: Number(chatId),
				authorId,
				content,
			});
	};

	return { sendMessage };
};
