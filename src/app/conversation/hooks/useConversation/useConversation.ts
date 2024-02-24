import { useState, useCallback, useEffect } from "react";
import { chatWsService } from "src/app/services";
import { useThreadsQuery } from "src/app/userThreads/hooks/useThreadsQuery";

export type Message = {
	content: string;
	id: number;
	author: {
		id: number;
		avatar: string | null;
		email: string;
		username: string | null;
	};
};

export const useConversation = (chatId: number) => {
	const { data, isLoading } = useThreadsQuery();
	const [isFetching, setIsFetching] = useState(false);
	const [messages, setMessages] = useState<Message[] | []>([]);
	const isChatParticipant =
		!isLoading && data?.some((thread) => thread.id === chatId);

	const chatTitle = data && data[0].title;

	const messageListener = useCallback((message: Message[]) => {
		setMessages((prevMessages) => [...prevMessages, ...message]);
	}, []);

	useEffect(() => {
		setIsFetching(true);
		if (isFetching) {
			chatWsService.subscribeToError((error) => {
				console.log("Server-side error:", error);
			});
			chatWsService.joinToRoom(Number(chatId));
		}
	}, [isFetching, chatId]);

	useEffect(() => {
		chatWsService.subscribeToMessage(messageListener);

		return () => chatWsService.unsubscribe("receiveMessage", messageListener);
	}, [messageListener]);

	return { isChatParticipant, messages, chatTitle };
};
