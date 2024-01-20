import { Outlet, Route, Routes, useRouteError } from "react-router-dom";
import { LoginContainer } from "src/app/auth/login/LoginContainer";

import { Layout } from "src/app/layout";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { AppRoutes } from "./appRoutes.enum";

export const Homepage = () => <div>Homepage</div>;
export const ErrorPage = () => {
	const error = useRouteError();

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

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				element={
					<PrivateRoute>
						<Layout>
							<Outlet />
						</Layout>
					</PrivateRoute>
				}
			>
				<Route element={<Homepage />} path={AppRoutes.HOME} />
				<Route element={<ErrorPage />} path={"*"} />
			</Route>
			<Route element={<LoginContainer />} path={AppRoutes.AUTH_LOGIN} />
			<Route element={<ErrorPage />} path={"*"} />
		</Routes>
	);
};
