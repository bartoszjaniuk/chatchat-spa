import { useQuery } from "@tanstack/react-query";
import { getAuthApiService } from "src/app/api/services/authService/authService.service";
import { AuthStatus } from "./auth/context/AuthContext";

const SESSION_QUERY_KEY = ["session"];

type SessionPayload = {
	user: {
		email: string;
		avatar: string;
		bio: string;
	};
};

const resolveAuthStatus = (
	session: SessionPayload | undefined,
	sessionQueryStatus: "success" | "error" | "pending",
): AuthStatus => {
	if (sessionQueryStatus === "pending") {
		return "loading";
	}
	if (sessionQueryStatus === "success") {
		return "authorized";
	}
	if (sessionQueryStatus === "error" || !session) {
		return "unauthorized";
	}
	return "idle";
};

export const useSession = () => {
	const { data, status } = useQuery({
		queryKey: SESSION_QUERY_KEY,
		queryFn: getAuthApiService().getSession,
	});
	return {
		authStatus: resolveAuthStatus(data, status),
		data,
	};
};
