import { Dispatch, createContext } from "react";
import { initialState } from "../constants/initialState";
import { DataActions } from "../reducer/data.actions";

export type AuthStatus = "idle" | "loading" | "unauthorized" | "authorized";

export type User = {
	avatar: string;
	bio: string;
	email: string;
	username: string;
};

export type DataState = {
	authStatus: AuthStatus;
	user: User | undefined;
	isDisabled: boolean;
};

export type DataDispatch = Dispatch<DataActions>;

export const DataStateContext = createContext<DataState>(initialState);

export const DataDispatchContext = createContext<DataDispatch | undefined>(
	undefined,
);
