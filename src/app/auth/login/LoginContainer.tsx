import { Login } from "..";
import { useLogin } from "../hooks";

export const LoginContainer = () => {
	const { signIn } = useLogin();

	return <Login signIn={signIn} />;
};
