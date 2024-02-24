export const authServiceQueryKeys = {
	session: () => "auth/session",
	login: () => "auth/login",
	logout: () => "auth/logout",
	register: () => "auth/register",
};

export const userServiceQueryKeys = {
	me: () => "users/me",
	appUsers: () => "users/all",
	filteredUsers: (params: any) => ["users", { params }],
	addFriend: (friendId: string) => ["users/add", friendId],
};

export const chatServiceQueryKeys = {
	chat: () => "chat",
	threads: () => `${chatServiceQueryKeys.chat()}/threads`,
};
