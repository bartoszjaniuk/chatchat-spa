import { useDispatch } from "../hooks/useDispatchProvider";
import { useRequest } from "../hooks/useRequest";
import { userService } from "src/app/api/services/userService/user.service";
import { User } from "../contexts/dataContext";
import { PropsWithChildren, useCallback, useEffect, useMemo } from "react";
import { ApiContext } from "../contexts/apiContext";
import { isAxiosError } from "axios";
import { authService } from "src/app/api/services/authService/authService.service";
import { useData } from "../hooks/useDataProvider";

const useAuthSession = () => {
	const dispatch = useDispatch();
	const getSessionAction = useCallback(
		() => dispatch({ type: "GET_SESSION" }),
		[dispatch],
	);

	const { payload, request } = useRequest({
		apiAction: authService.getSession,
		dispatchAction: getSessionAction,
	});

	const setAuthLoadingState = () => {
		return dispatch({ type: "SET_AUTH_LOADING" });
	};

	const setAuthErrorState = () => {
		return dispatch({ type: "SET_AUTH_ERROR" });
	};

	const getSession = async () => {
		return await request();
	};

	return { setAuthLoadingState, setAuthErrorState, payload, getSession };
};

const useAuthUser = () => {
	const dispatch = useDispatch();

	const getUserAction = (payload: User) =>
		dispatch({ type: "GET_USER", payload });

	const { request } = useRequest({
		apiAction: userService.getUser,
		dispatchAction: getUserAction,
	});

	const getUser = async () => await request();

	return { getUser };
};

export const ApiProvider = ({ children }: PropsWithChildren) => {
	const { authStatus } = useData();
	const { getSession, setAuthLoadingState, setAuthErrorState } =
		useAuthSession();

	const isAuthPage = window.location.href.includes("/auth");

	const { getUser } = useAuthUser();
	const isNotAuthorized = authStatus === "unauthorized";

	const dispatch = useDispatch();

	// const disableFetching = () => dispatch({ type: "SET_DISABLED" });

	const redirect = (url: string) => window.location.assign(url);

	const fetchSessionData = async () => {
		setAuthLoadingState();
		const sessionResponse = await getSession();
		const isSessionError = !sessionResponse || isAxiosError(sessionResponse);

		if (isSessionError) {
			setAuthErrorState();
		}
	};

	useEffect(() => {
		if (isAuthPage) return;
		fetchSessionData();
	}, [isAuthPage]);

	// useEffect(() => {
	// 	if (isNotAuthorized) {
	// 		redirect(AppRoutes.AUTH_LOGIN);
	// 	}
	// 	getUser();
	// }, [isNotAuthorized]);

	const login = () => {};
	const logout = () => {};

	const value = useMemo(() => ({ login, logout }), []);

	return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
