import { useLogin } from "src/app/auth/hooks";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { useSession } from "src/app/auth/hooks/useSession/useSession";
import {
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { AuthContext } from "./authContext";
import { jwtService } from "src/app/api/services/jwtService/jwtService.service";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState(undefined);
	const [token, setToken] = useState(jwtService.getToken());
	const { mutate, data: loginData } = useLogin();
	const {
		data: session,
		error,
		isLoading: isAuthLoading,
	} = useSession(!!token);
	const isAuthorized = !!session;

	useEffect(() => {
		if (session) setUser(session);
	}, [session]);

	useEffect(() => {
		if (loginData) {
			jwtService.setToken(loginData.access_token);
			setToken(loginData.access_token);
		}
	}, [loginData]);

	useEffect(() => {
		if (error) {
			setUser(undefined);
			setToken(null);
			jwtService.removeToken();
		}
	}, [error]);

	const login = useCallback(
		(payload: UserCredentials) => {
			mutate(payload);
		},
		[mutate],
	);

	const value = useMemo(() => {
		return {
			authStatus: "success",
			user,
			isAuthorized,
			token,
			login,
			isAuthLoading,
		};
	}, [user, isAuthorized, token, login, isAuthLoading]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
