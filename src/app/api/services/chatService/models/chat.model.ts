export type UserThreads = {
	chatId: number;
	title: string;
	lastMessage: {
		author: string;
		content: string;
	} | null;
	messageLastUpdatedAt: string | null;
};

export type CreateChat = {
	userId: number;
	username: string;
};
