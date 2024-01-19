import {
	Dispatch,
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from "react";
import { UserAuthResponse } from "../api/services/authService/models/userAuthResponse.types";
import { AuthStatus } from "./models";
import { authService } from "../api/services/authService/authService.service";
import { userService } from "../api/services/userService/user.service";

export const AuthContext = createContext<AuthState | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw Error("No AuthProvider available");
	}
	return context;
};

type AuthState = {
	authStatus: AuthStatus;
	user: UserAuthResponse | undefined;
};

type AuthActions =
	| { type: "SET_AUTH_STATE"; payload: AuthStatus }
	| { type: "SET_USER"; payload: any };

export const authReducer = (
	state: AuthState,
	action: AuthActions,
): AuthState => {
	switch (action.type) {
		case "SET_AUTH_STATE":
			return { ...state, authStatus: action.payload };
		case "SET_USER": {
			return { ...state, authStatus: "authorized", user: action.payload };
		}
	}
};

const initialState: AuthState = {
	user: undefined,
	authStatus: "idle",
};

const DataContext = createContext<AuthState | undefined>(undefined);

type ActionsState = Dispatch<AuthActions>;
const ActionsContext = createContext<ActionsState | undefined>(undefined);

export const useDataContext = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw Error("No DataProvider available");
	}
	return context;
};

export const useActionsContext = () => {
	const context = useContext(ActionsContext);
	if (!context) {
		throw Error("No ActionsProvider available");
	}
	return context;
};

const AuthDataProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
	return (
		<DataContext.Provider value={state}>
			<ActionsContext.Provider value={dispatch}>
				{children}
			</ActionsContext.Provider>
		</DataContext.Provider>
	);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const { authStatus, user } = useDataContext();
	const dispatch = useActionsContext();
	useEffect(() => {
		const getSession = async () => {
			dispatch({ type: "SET_AUTH_STATE", payload: "loading" });
			try {
				const session = await authService.getSession();
				if (!session) return;
				const user = await userService.getUser();
				if (user) {
					dispatch({ type: "SET_USER", payload: user });
				}
			} catch (error) {
				dispatch({ type: "SET_AUTH_STATE", payload: "unauthorized" });
			}
		};
		getSession();
	}, [dispatch]);

	const value = useMemo(() => ({ authStatus, user }), [authStatus, user]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const GlobalAuthProvider = ({ children }: PropsWithChildren) => {
	return (
		<AuthDataProvider>
			<AuthProvider>{children}</AuthProvider>
		</AuthDataProvider>
	);
};