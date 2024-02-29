import { useMutation } from "@tanstack/react-query";
import { chatService } from "src/app/api";

export const useGetOrCreateChatMutation = () => {
	return useMutation({ mutationFn: chatService.createChat });
};
