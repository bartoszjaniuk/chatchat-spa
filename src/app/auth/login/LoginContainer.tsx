import { Login } from "..";

import { useLogin } from "../hooks";

export const LoginContainer = () => {
	const { mutate } = useLogin();

	return <Login signIn={mutate} />;
};
