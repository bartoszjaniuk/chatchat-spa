import { Outlet, Route, Routes } from "react-router-dom";
import { LoginContainer } from "src/app/auth/components/login/LoginContainer";

import { Layout } from "src/app/layout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { AppRoutes } from "./enums/appRoutes.enum";
import { SearchUsers } from "../friends/searchUsers/SearchUsers";
import { Conversation } from "../conversation/Conversation";
import { ErrorPage } from "../error/ErrorPage";
import { Home } from "../home/Home";
import { UserThreads } from "../userThreads/UserThreads";
import { WebSocketProvider } from "../providers/webSocketProvider/WebSocketProvider";
import { Friends } from "../friends";

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
				<Route element={<Home />} path={AppRoutes.HOME} />
				<Route element={<Friends />} path={AppRoutes.FRIENDS} />
				<Route element={<SearchUsers />} path={AppRoutes.SEARCH} />
				<Route element={<UserThreads />} path={AppRoutes.THREADS} />
				<Route
					element={
						<WebSocketProvider>
							<Conversation />
						</WebSocketProvider>
					}
					path={AppRoutes.THREAD}
				/>
				<Route element={<ErrorPage />} path={"*"} />
			</Route>
			<Route element={<LoginContainer />} path={AppRoutes.AUTH_LOGIN} />
			<Route element={<ErrorPage />} path={"*"} />
		</Routes>
	);
};
