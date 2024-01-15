import { useReducer } from "react";
import { UserAuthResponse } from "src/app/api/services/authService/models/userAuthResponse.types";
import { jwtService } from "src/app/api/services/jwtService/jwtService.service";

export type AuthStatus = "idle" | "loading" | "error" | "success";

export type AuthState = {
	isAuthorized: boolean;
	user: UserAuthResponse | undefined;
	authStatus: AuthStatus;
	token: Token;
};

export type Token = string | undefined;

type AuthActions =
	| { type: "SET_AUTH_STATUS"; payload: AuthStatus }
	| { type: "SET_ACCESS_TOKEN"; payload: Token }
	| { type: "SET_USER_DATA"; payload: UserAuthResponse }
	| { type: "CLEAR_STATE" };

const initialState: AuthState = {
	isAuthorized: false,
	user: undefined,
	authStatus: "idle",
	token: jwtService.getToken() || undefined,
};

export const authReducer = (
	state: AuthState,
	action: AuthActions,
): AuthState => {
	switch (action.type) {
		case "SET_AUTH_STATUS":
			return { ...state, authStatus: action.payload };
		case "SET_USER_DATA":
			return {
				...state,
				user: action.payload,
				isAuthorized: true,
				authStatus: "success",
			};
		case "SET_ACCESS_TOKEN": {
			jwtService.setToken(action.payload);
			return { ...state, token: action.payload };
		}
		case "CLEAR_STATE": {
			jwtService.removeToken();
			return initialState;
		}

		default:
			throw new Error("Invalid action type.");
	}
};

export const useAuthReducer = () => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	return { state, dispatch };
};
