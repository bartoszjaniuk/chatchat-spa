export type LoginResponse = {
	accessToken: string;
	refreshToken: string;
	user: {
		email: string;
		avatar: string;
		bio: string;
	};
};
