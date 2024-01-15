import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.consts";
import { useAuth } from "./app/shared";

export const App = () => {
	const { authStatus } = useAuth();
	console.log("App", authStatus);

	if (authStatus === "loading") {
		return <div>Loading...</div>;
	}

	return <RouterProvider router={router} />;
};
