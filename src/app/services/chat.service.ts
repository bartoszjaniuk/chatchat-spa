import { API_URL } from "./constants/apiUrl";
import { SocketService } from "./socket.service";

export class ChatWsService extends SocketService {
	private static instance: ChatWsService;

	constructor(API_URL: string) {
		super(API_URL);
	}

	joinToRoom(roomName: number) {
		this.emit("joinToChat", roomName);
	}

	subscribeToMessage(listener: (arg: any) => void) {
		this.subscribe("receiveMessage", listener);
	}

	subscribeToError(listener: (arg: any) => void) {
		this.subscribe("exception", listener);
	}

	typing({ chatId, isTyping }: { chatId: number; isTyping: boolean }) {
		this.emit("typing", { chatId, isTyping });
	}

	sendMessage(payload: { authorId: number; content: string; chatId: number }) {
		this.emit("sendMessage", payload);
	}

	public static getInstance(): ChatWsService {
		if (!ChatWsService.instance) {
			ChatWsService.instance = new ChatWsService(API_URL);
		}
		return ChatWsService.instance;
	}
}

export const chatWsService = ChatWsService.getInstance();
