import { useState, useCallback, useEffect } from "react";
import { Socket } from "socket.io-client";

type ChatMessage = {
	id: number;
	content: string;
	author: {
		id: number;
		avatar: string | null;
		email: string;
		username: string | null;
	};
};

export const useChatMessages = (socket: Socket | null) => {
	const [messages, setMessages] = useState<ChatMessage[] | []>([]);
	const messageListener = useCallback((message: ChatMessage[]) => {
		setMessages((prevMessages) => [...prevMessages, ...message]);
	}, []);

	useEffect(() => {
		socket?.on("receiveMessage", messageListener);

		return () => {
			socket?.off("receiveMessage", messageListener);
		};
	}, [messageListener, socket]);

	return messages;
};
