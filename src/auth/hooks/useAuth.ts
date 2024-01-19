import { useData } from "./useDataProvider";
import { useContext } from "react";
import { ApiContext } from "../contexts/apiContext";

export const useAuth = () => {
	const { authStatus, user } = useData();
	const { login, logout } = useContext(ApiContext);

	return {
		authStatus,
		user,
		login,
		logout,
	};
};
