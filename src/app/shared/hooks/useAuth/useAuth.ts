import { useContext } from "react";
import { AuthContext } from "src/provider/auth/authContext";

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (typeof context === "undefined") {
		throw new Error("useAuthClient hook is not wrapped by AuthClient provider");
	}

	return context;
};
