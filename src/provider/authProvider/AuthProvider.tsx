import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { authService } from "src/app/api/services/authService/authService.service";
import { userService } from "src/app/api/services/userService/user.service";
import { AuthContext, AuthUser } from "src/core/auth/context/AuthContext";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<AuthUser | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);

	const fetch = async () => {
		try {
			setIsLoading(true);
			const session = await authService.getSession();
			if (session.user) {
				const data = await userService.getUser();
				setUser(data.data);
				return;
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetch();
	}, []); // Dependency array that includes user

	const value = useMemo(
		() => ({
			user,
			isLoading,
		}),
		[isLoading, user],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const useAuthProvider = () => {
// 	const [user, setUser] = useState<AuthUser | undefined>(undefined);
// 	const [isLoading, setIsLoading] = useState(false);

// 	useEffect(() => {
// 		const fetch = async () => {
// 			try {
// 				setIsLoading(true);
// 				const session = await getAuthApiService().getSession();
// 				// TODO: CHANGE RESPONSE
// 				if (session.user) {
// 					const data = await userService.getUser();
// 					console.log(data.data, "wtf");
// 					setUser(user);
// 				}
// 				console.log(session);
// 			} catch (error) {
// 				console.log(error);
// 			} finally {
// 				setIsLoading(false);
// 			}
// 		};

// 		if (!user) fetch();
// 	}, [user]);

// 	return { user, isLoading };
// };
