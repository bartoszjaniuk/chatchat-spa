import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { LoginContainer } from "src/app/auth/login/LoginContainer";

import PrivateRoute from "./privateRoute/PrivateRoute";
import { Layout } from "src/layout";

export const Homepage = () => <div>Homepage</div>;
export const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export enum AppRoutes {
	HOME = "/",
	AUTH_LOGIN = "/auth",
}

export const router = createBrowserRouter([
	{
		element: <PrivateRoute />,
		children: [
			{
				element: <Layout />,
				children: [{ path: AppRoutes.HOME, element: <Homepage /> }],
			},
			{
				path: "*",
				element: <Navigate to={AppRoutes.HOME} />,
			},
		],
	},
	{
		element: <LoginContainer />,
		path: "/auth",
	},
	{
		path: "*",
		element: <Navigate to={AppRoutes.AUTH_LOGIN} />,
	},
]);
