import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "src/auth/hooks/useAuth";

const PrivateRoute = ({ children }: PropsWithChildren) => {
	const { authStatus } = useAuth();

	if (authStatus === "loading") return <div>Loading</div>;

	if (authStatus === "authorized")
		return children ? <>{children}</> : <Outlet />;

	return null;
};

export default PrivateRoute;
