import { useCallback, useEffect, useState } from "react";
import { useThreadsQuery } from "src/app/userThreads";
import { useWebSocket } from "../../WebSocketProvider";

export type ChatMessage = {
	id: number;
	content: string;
	author: {
		id: number;
		avatar: string | null;
		email: string;
		username: string | null;
	};
};

export const useConversation = (chatId: number) => {
	const { socket } = useWebSocket();
	const { data, isLoading } = useThreadsQuery();
	const [isFetching, setIsFetching] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[] | []>([]);
	const isChatParticipant =
		!isLoading && data?.some((thread) => thread.chatId === chatId);

	const chatTitle = data && data[0].title;

	const messageListener = useCallback((message: ChatMessage[]) => {
		setMessages((prevMessages) => [...prevMessages, ...message]);
	}, []);

	useEffect(() => {
		socket?.on("exception", (error) => {
			console.log("Server-side error:", error);
		});
		return () => {
			socket?.off("exception", (error) => {
				console.log("Server-side error:", error);
			});
		};
	}, [socket]);

	useEffect(() => {
		setIsFetching(true);
		if (isFetching) {
			socket?.emit("joinToChat", Number(chatId));
		}
	}, [isFetching, chatId, socket]);

	useEffect(() => {
		socket?.on("receiveMessage", messageListener);

		return () => {
			socket?.off("receiveMessage", messageListener);
		};
	}, [messageListener, socket]);

	return { isChatParticipant, messages, chatTitle };
};
