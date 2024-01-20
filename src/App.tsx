import { useAuth } from "./app/providers/authProvider/AuthProvider";
import { AppRouter } from "./app/router/AppRouter";

export const App = () => {
	const { authStatus } = useAuth();

	if (authStatus === "loading") return <div>Loader goes here...</div>;

	return <AppRouter />;
};
