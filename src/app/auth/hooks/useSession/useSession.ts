import { useQuery } from "@tanstack/react-query";
import { authService } from "src/app/api/services/authService/authService.service";
import { resolveAuthStatus } from "../../utils";

//TODO: move it
const SESSION_QUERY_KEY = ["session"];

export const useSession = () => {
	const { data, status } = useQuery({
		queryKey: SESSION_QUERY_KEY,
		queryFn: authService.getSession,
	});

	return { data, authStatus: resolveAuthStatus(data, status) };
};
