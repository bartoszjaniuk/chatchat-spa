import { createContext } from "react";
import { AuthState } from "../data/dataReducer";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

export type AuthContextType = AuthState & {
	login: (payload: UserCredentials) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);
