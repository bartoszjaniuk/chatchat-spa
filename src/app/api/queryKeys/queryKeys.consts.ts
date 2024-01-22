export const authServiceQueryKeys = {
	session: () => "auth/session",
	login: () => "auth/login",
	logout: () => "auth/logout",
	register: () => "auth/register",
};

export const userServiceQueryKeys = {
	me: () => "users/me",
	appUsers: () => "users/app",
};
