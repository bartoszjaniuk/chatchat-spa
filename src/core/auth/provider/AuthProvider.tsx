import {
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useGetUser } from "src/core/useGetUser";
import { useSession } from "src/core/useSession";
import { AuthContext, AuthUser } from "../context/AuthContext";
import { useLogin } from "src/app/auth/hooks";
import { useLogout } from "src/core/useLogout";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

export const AuthProviderro = ({ children }: PropsWithChildren) => {
	// Check if it will work with simple fetch

	const { authStatus } = useSession();
	const { isSuccess, data, isLoading } = useGetUser(
		authStatus === "authorized",
	);
	const [user, setUser] = useState<AuthUser | undefined>(undefined);
	const { mutate } = useLogin();
	const { refetch } = useLogout();

	const login = useCallback(
		(payload: UserCredentials) => {
			mutate(payload);
		},
		[mutate],
	);

	const logout = useCallback(() => {
		refetch();
	}, [refetch]);

	useEffect(() => {
		if (!isSuccess) return;
		console.log(data, "useEffectData");
		setUser(data?.data);
	}, [data, isSuccess]);

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
			isLoading,
			authStatus,
		}),
		[authStatus, isLoading, login, logout, user],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
