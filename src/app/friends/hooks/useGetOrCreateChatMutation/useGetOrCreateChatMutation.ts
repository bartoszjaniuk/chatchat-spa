import { useMutation } from "@tanstack/react-query";
import { chatService } from "src/app/api";

export const useGetOrCreateChatMutation = (
	handleMutate: (chatId: number) => void,
) => {
	return useMutation({
		mutationFn: chatService.createChat,
		onSuccess: (data) => handleMutate(data.chatId),
	});
};
