import { createContext } from "react";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

export type ApiContextType = {
	login: (payload: UserCredentials) => void;
	logout: VoidFunction;
};

export const ApiContext = createContext<ApiContextType>({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	login: (payload: UserCredentials) => {},
	logout: () => {},
});
