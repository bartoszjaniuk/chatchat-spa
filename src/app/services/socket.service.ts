import { Socket, io } from "socket.io-client";
import { API_URL } from "./constants/apiUrl";

export class SocketService {
	protected socket: Socket;

	constructor(API_URL: string) {
		this.socket = io(API_URL, {
			withCredentials: true,
			transports: ["websocket"],
		});
	}

	subscribe(eventName: string, listener: (arg: any) => void) {
		this.socket.on(eventName, listener);
	}

	unsubscribe(eventName: string, listener?: (arg: any) => void) {
		this.socket.off(eventName, listener);
	}

	emit(eventName: string, payload: unknown) {
		this.socket.emit(eventName, payload);
	}
}

export const socketService = new SocketService(API_URL);
