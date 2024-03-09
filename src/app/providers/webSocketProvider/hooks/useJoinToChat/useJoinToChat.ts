import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";

export const useJoinToChat = (socket: Socket | null) => {
	const [isFetching, setIsFetching] = useState(false);
	const params = useParams();
	const chatId = params?.id ? Number(params.id) : undefined;

	useEffect(() => {
		setIsFetching(true);
		if (isFetching && chatId) {
			socket?.emit("joinToChat", Number(chatId));
		}
	}, [isFetching, chatId, socket]);
};
