import { useEffect, useState } from "react";
import { chatWsService } from "src/app/services";

export const useTypingActivity = (chatId: number) => {
	const [isUserTyping, setIsUserTyping] = useState(false);
	const [timer, setTimer] = useState<number | undefined>(undefined);

	const handleTyping = () => {
		if (!isUserTyping) chatWsService.typing({ chatId, isTyping: true });
		clearTimeout(timer);
		setTimer(
			setTimeout(() => {
				chatWsService.typing({ chatId, isTyping: false });
			}, 800),
		);
	};

	useEffect(() => {
		chatWsService.subscribe("typing", (isTyping) => {
			setIsUserTyping(isTyping);
		});
		return () => {
			chatWsService.unsubscribe("typing");
			clearTimeout(timer);
		};
	}, [timer]);

	return { isUserTyping, handleTyping };
};
