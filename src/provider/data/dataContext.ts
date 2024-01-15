import { createContext, Dispatch } from "react";
import { AuthState, initialState, AuthActions } from "./dataReducer";

export const DataStateContext = createContext<AuthState>(initialState);

export const DataDispatchContext = createContext<
	Dispatch<AuthActions> | undefined
>(undefined);
