import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useSession } from "src/app/auth/hooks/useSession/useSession";

const PrivateRoute = ({ children }: PropsWithChildren) => {
	const { authStatus } = useSession();

	if (authStatus === "authorized")
		return children ? <>{children}</> : <Outlet />;

	return null;
};

export default PrivateRoute;
