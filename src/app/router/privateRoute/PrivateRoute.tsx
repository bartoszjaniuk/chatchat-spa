import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "src/app/providers/authProvider/AuthProvider";

const PrivateRoute = ({ children }: PropsWithChildren) => {
	const { authStatus } = useAuth();

	console.log({ authStatus }, "PrivateRoute");

	if (authStatus === "authorized")
		return children ? <>{children}</> : <Outlet />;

	return null;
};

export default PrivateRoute;
