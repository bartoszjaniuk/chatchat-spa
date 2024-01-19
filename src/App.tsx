import { RouterProvider } from "react-router-dom";
import { useSession } from "./app/auth/hooks/useSession/useSession";
import { router } from "./router/router.consts";

export const App = () => {
	const { authStatus } = useSession();

	if (authStatus === "loading") {
		return <div>Loading...</div>;
	}

	return <RouterProvider router={router} />;
};
