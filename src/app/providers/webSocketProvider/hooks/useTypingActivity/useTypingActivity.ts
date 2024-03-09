import { useEffect, useState } from "react";
import { useWebSocket } from "../../WebSocketProvider";
import { useParams } from "react-router-dom";

export const useTypingActivity = () => {
	const { socket } = useWebSocket();
	const params = useParams();
	const chatId = params?.id ? Number(params.id) : undefined;
	const [isUserTyping, setIsUserTyping] = useState(false);
	const [timer, setTimer] = useState<number | undefined>(undefined);

	const handleTyping = () => {
		if (!isUserTyping) socket?.emit("typing", { chatId, isTyping: true });
		clearTimeout(timer);
		setTimer(
			setTimeout(() => {
				socket?.emit("typing", { chatId, isTyping: false });
			}, 800),
		);
	};

	useEffect(() => {
		socket?.on("typing", (isTyping) => {
			setIsUserTyping(isTyping);
		});
		return () => {
			socket?.off("typing", (isTyping) => {
				setIsUserTyping(isTyping);
			});
			clearTimeout(timer);
		};
	}, [socket, timer]);

	return { isUserTyping, handleTyping };
};
