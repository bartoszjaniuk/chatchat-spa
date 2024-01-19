import { DataState } from "../contexts/dataContext";
import { DataActions } from "./data.actions";

export const dataReducer = (
	state: DataState,
	action: DataActions,
): DataState => {
	switch (action.type) {
		case "SET_AUTH_LOADING":
			return { ...state, authStatus: "loading" };
		case "SET_AUTH_ERROR":
			return { ...state, authStatus: "unauthorized" };
		case "SET_DISABLED":
			return { ...state, isDisabled: true };
		case "GET_SESSION":
			return { ...state, authStatus: "authorized" };
		case "LOGOUT":
			return {
				...state,
				authStatus: "unauthorized",
				user: undefined,
				isDisabled: false,
			};
		case "GET_USER":
			return { ...state, user: action.payload };
		default:
			throw new Error("Invalid action type.");
	}
};
