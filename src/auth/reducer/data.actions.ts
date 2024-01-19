import { User } from "../contexts/dataContext";

export type DataActions =
	| { type: "SET_AUTH_LOADING" }
	| { type: "SET_AUTH_ERROR" }
	| { type: "LOGOUT" }
	| { type: "GET_SESSION" }
	| { type: "SET_DISABLED" }
	| { type: "GET_USER"; payload: User };
