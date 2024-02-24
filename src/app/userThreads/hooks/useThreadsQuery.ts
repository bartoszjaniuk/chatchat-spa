import { useQuery } from "@tanstack/react-query";
import { chatServiceQueryKeys } from "src/app/api/queryKeys/queryKeys.consts";
import { chatService } from "src/app/api/services/chatService/chat.service";

export const useThreadsQuery = () => {
	return useQuery({
		queryKey: [chatServiceQueryKeys.threads()],
		queryFn: chatService.getUserThreads,
	});
};
