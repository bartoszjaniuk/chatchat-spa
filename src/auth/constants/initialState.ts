import { AuthStatus } from "../contexts/dataContext";

export const initialState = {
	user: undefined,
	authStatus: "idle" as AuthStatus,
	isDisabled: false,
};
