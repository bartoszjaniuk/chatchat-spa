import { useSession } from "../useSession";
import { useGetUser } from "../useGetUser";

export const useAuthSession = () => {
	const { authStatus } = useSession();
	const { data } = useGetUser();

	return { authStatus, user: data };
};
