import { useAuth } from "./app/auth/auth.container";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
	const { authStatus } = useAuth();

	if (authStatus === "loading") return <div>Loader goes here...</div>;

	return <AppRouter />;
};
