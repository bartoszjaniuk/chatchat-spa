import { useEffect } from "react";
import { Socket } from "socket.io-client";

export const useChatError = (socket: Socket | null) => {
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
};
