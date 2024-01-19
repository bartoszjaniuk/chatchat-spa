import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "src/app/auth/auth.container";

const PrivateRoute = ({ children }: PropsWithChildren) => {
	const { authStatus } = useAuth();

	if (authStatus === "authorized")
		return children ? <>{children}</> : <Outlet />;

	return null;
};

export default PrivateRoute;
