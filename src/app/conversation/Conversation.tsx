import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "src/app/providers/authProvider/AuthProvider";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";
import { SingleMessage } from "./components/singleMessage/SingleMessage";
import { useEffect, useMemo } from "react";
import { MessageInput } from "./components/messageInput/MessageInput";
import { useConversation } from "../providers/webSocketProvider/hooks/useConversation/useConversation";
import { useTypingActivity } from "../providers/webSocketProvider/hooks/useTypingActivity/useTypingActivity";

export const Conversation = () => {
	const params = useParams();
	const chatId = params?.id ? Number(params.id) : undefined;
	const { user } = useAuth();
	const navigate = useNavigate();

	const { data, messages, chatTitle, isLoading } = useConversation(chatId);
	const { isUserTyping, handleTyping } = useTypingActivity(chatId);

	const isChatParticipant = useMemo(
		() => data && data.some((thread) => thread.chatId === chatId),
		[chatId, data],
	);

	// TODO: INVESTIGATE
	// console.log({ isLoading, isChatParticipant, data, messages });

	useEffect(() => {
		if (!isLoading && !isChatParticipant) {
			// TODO: INVESTIGATE
			// console.log("N A V I G A T E");
			// navigate(AppRoutes.HOME);
			window.location.assign(AppRoutes.HOME);
		}
	}, [isChatParticipant, isLoading, navigate]);

	if (isLoading) return <div className="p-4">Loading Chat...</div>;

	return (
		<>
			{!isLoading && (
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
			)}
		</>
	);
};
