import { createBrowserRouter } from "react-router-dom";
import { LoginContainer } from "src/app/auth/login/LoginContainer";

import PrivateRoute from "./privateRoute/PrivateRoute";

const privateRoutes = () => {
	return {
		element: <PrivateRoute />,
		children: [{ path: "/", element: <Homepage /> }],
	};
};
const publicRoutes = () => {
	return [{ path: "/auth", element: <LoginContainer /> }];
};

export const Homepage = () => <div>Homepage</div>;
export const NotFoundPage = () => <div>NotFoundPage</div>;

export const router = createBrowserRouter([privateRoutes(), ...publicRoutes()]);

export enum AppRoutes {
	HOME = "/",
	AUTH_LOGIN = "/auth",
}
