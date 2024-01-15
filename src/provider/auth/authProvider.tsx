import { useLogin } from "src/app/auth/hooks";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { useSession } from "src/app/auth/hooks/useSession/useSession";
import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import { AuthContext } from "./authContext";
import { useAuthReducer } from "./useAuthReducer";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const { state, dispatch } = useAuthReducer();
	const { mutate, data: loginData, isPending } = useLogin();
	const { data: session, error, isLoading } = useSession(!!state.token);
	console.log("authProvider", { isLoading, isPending });

	const loadingState = isPending || isLoading;

	useEffect(() => {
		console.log("useeFFECT");
		if (loadingState) dispatch({ type: "SET_AUTH_STATUS", payload: "loading" });
	}, [dispatch, loadingState]);

	useEffect(() => {
		if (!loginData) return;
		dispatch({ type: "SET_ACCESS_TOKEN", payload: loginData.access_token });
	}, [loginData, dispatch]);

	useEffect(() => {
		if (session) {
			dispatch({ type: "SET_AUTH_STATUS", payload: "loading" });
			dispatch({ type: "SET_USER_DATA", payload: session });
		}
	}, [dispatch, session]);

	useEffect(() => {
		if (!error) return;
		dispatch({ type: "CLEAR_STATE" });
	}, [dispatch, error]);

	const login = useCallback(
		(payload: UserCredentials) => {
			dispatch({ type: "SET_AUTH_STATUS", payload: "loading" });
			mutate(payload);
		},
		[dispatch, mutate],
	);

	const value = useMemo(() => {
		return {
			...state,
			login,
		};
	}, [login, state]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
