import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/app/shared";
import { AppRoutes } from "../router.consts";

const PrivateRoute = () => {
	const { token } = useAuth();

	if (!token) return <Navigate to={AppRoutes.AUTH_LOGIN} replace />;
	return <Outlet />;
};

export default PrivateRoute;
