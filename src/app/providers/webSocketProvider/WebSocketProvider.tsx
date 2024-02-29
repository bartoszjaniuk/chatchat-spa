import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Socket, io } from "socket.io-client";
import { API_URL } from "src/app/services/constants/apiUrl";

type WebSocketState = {
	socket: Socket | null;
};

export const WebSocketContext = createContext<WebSocketState | undefined>(
	undefined,
);

export const useWebSocket = () => {
	const context = useContext(WebSocketContext);
	if (!context) {
		throw Error("No WebSocketProvider available");
	}
	return context;
};

export const WebSocketProvider = ({ children }: PropsWithChildren) => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const newSocket = io(API_URL, {
			withCredentials: true,
			transports: ["websocket"],
		});
		setSocket(newSocket);
		return () => {
			newSocket.close();
		};
	}, []);

	const value = useMemo(
		() => ({
			socket,
		}),
		[socket],
	);
	return (
		<WebSocketContext.Provider value={value}>
			{children}
		</WebSocketContext.Provider>
	);
};
