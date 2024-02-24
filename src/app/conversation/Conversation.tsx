import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "src/app/providers/authProvider/AuthProvider";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";
import { useConversation } from "./hooks/useConversation/useConversation";
import { SingleMessage } from "./components/singleMessage/SingleMessage";
import { useEffect } from "react";
import { MessageInput } from "./components/messageInput/MessageInput";
import { useTypingActivity } from "./hooks/useTypingActivity/useTypingActivity";

export const Conversation = () => {
	const params = useParams();
	const chatId = Number(params.id);
	const { user } = useAuth();
	const navigate = useNavigate();
	const { isChatParticipant, messages, chatTitle } = useConversation(chatId);
	const { isUserTyping, handleTyping } = useTypingActivity(chatId);

	useEffect(() => {
		if (!isChatParticipant) navigate(AppRoutes.HOME);
	}, [isChatParticipant, navigate]);

	return (
		<div className="w-full max-h-[calc(100vh-65px)] md:max-h-screen p-4 flex flex-col gap-4 ">
			<div className="flex gap-4 border-b pb-2">
				<h2>Title: {chatTitle}</h2>
				<span>|</span>
				Number of messages: {messages.length}
				<div>{isUserTyping.toString()}: isUserTyping</div>
			</div>
			<div className="flex h-1/2 md:h-[90%] flex-col gap-4 overflow-y-scroll pr-4 pb-16">
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
					<div className="flex justify-end w-full border pr-4">
						User is typing...
					</div>
				)}
			</div>
			<MessageInput handleTyping={handleTyping} userId={user?.id} />
		</div>
	);
};
