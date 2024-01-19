import { useAuth } from "./auth/hooks/useAuth";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
	const { authStatus } = useAuth();

	if (authStatus === "loading")
		return <div>Something amazing is loading...</div>;

	return <AppRouter />;
};
