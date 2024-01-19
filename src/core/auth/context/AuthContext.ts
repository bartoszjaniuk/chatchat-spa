import { createContext } from "react";

export type AuthUser = {
	email: string;
	avatar: string;
	bio: string;
};

type AuthContextType = {
	// login: (payload: UserCredentials) => void;
	// logout: VoidFunction;
	user: AuthUser | undefined;
	isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);
