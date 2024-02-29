export const authServiceQueryKeys = {
	session: () => "auth/session",
	login: () => "auth/login",
	logout: () => "auth/logout",
	register: () => "auth/register",
};

export const userServiceQueryKeys = {
	me: () => "users/me",
	appUsers: () => "users/all",
	friends: () => "users/friends",
	filteredUsers: (params: any) => ["users", { params }],
	addFriend: (friendId: string) => ["users/add", friendId],
};

export const chatServiceQueryKeys = {
	chat: () => "chat",
	createChat: () => "chat/create",
	threads: () => `${chatServiceQueryKeys.chat()}/threads`,
};
