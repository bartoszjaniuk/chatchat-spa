import { useParams } from "react-router-dom";
import { chatWsService } from "src/app/services";

export const useSendMessage = (authorId: number | undefined) => {
	const params = useParams();
	const chatId = params.id;

	const sendMessage = (content: string) => {
		if (authorId && chatId)
			chatWsService.sendMessage({ chatId: Number(chatId), authorId, content });
	};

	return { sendMessage };
};
