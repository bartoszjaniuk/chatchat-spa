import { useAuth } from "src/app/providers/authProvider/AuthProvider";
import { SingleMessage } from "./components/singleMessage/SingleMessage";
import { MessageInput } from "./components/messageInput/MessageInput";

import { useTypingActivity } from "../providers/webSocketProvider/hooks/useTypingActivity/useTypingActivity";
import { useWebSocket } from "../providers/webSocketProvider/WebSocketProvider";
import { useChatMessages } from "../providers/webSocketProvider/hooks/useChatMessages/useChatMessages";
import { useChatError } from "../providers/webSocketProvider/hooks/useChatError/useChatError";
import { useJoinToChat } from "../providers/webSocketProvider/hooks/useJoinToChat/useJoinToChat";
import { useThread } from "../providers/webSocketProvider/hooks/useThread/useThread";

export const Conversation = () => {
	const { socket } = useWebSocket();
	const { user } = useAuth();

	const { isLoading, threadTitle, recipient } = useThread(user?.username);
	const { isUserTyping, handleTyping } = useTypingActivity();
	const messages = useChatMessages(socket);

	useJoinToChat(socket);
	useChatError(socket);

	if (isLoading) return <div className="p-4">Loading Chat...</div>;

	return (
		<>
			{!isLoading && (
				<div className="w-full max-h-[calc(100vh-65px)] md:max-h-screen p-4 flex flex-col gap-4 ">
					<div className="flex gap-4 border-b pb-2">
						Your conversation with {threadTitle}
					</div>
					<div className="flex h-[80vh] flex-col gap-4 overflow-y-scroll pr-4 pb-16">
						{messages.length > 0 &&
							messages.map((message, i) => {
								return (
									<SingleMessage
										isCurrentUser={user?.id === message.author.id}
										key={i}
										email={message.author.email}
										message={message.content}
									/>
								);
							})}

						{isUserTyping && (
							<div className="flex justify-end w-full  pr-4">
								{recipient} is typing...
							</div>
						)}
					</div>
					<MessageInput handleTyping={handleTyping} userId={user?.id} />
				</div>
			)}
		</>
	);
};
