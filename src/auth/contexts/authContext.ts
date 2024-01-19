import { createContext } from "react";
import { AuthStatus, User } from "./dataContext";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

type AuthContext = {
	authStatus: AuthStatus;
	user: User;
	login: (payload: UserCredentials) => void;
	logout: VoidFunction;
};

export const AuthContext = createContext<AuthContext | undefined>(undefined);
