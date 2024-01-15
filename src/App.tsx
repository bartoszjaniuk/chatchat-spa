import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.consts";
import { useAuth } from "./app/shared";

export const App = () => {
	const { isAuthLoading } = useAuth();

	if (isAuthLoading) {
		return <div>Loading...</div>;
	}

	return <RouterProvider router={router} />;
};
