import { useContext } from "react";
import { ApiContext } from "../contexts/apiContext";

export const useAuthApiProvider = () => {
	const state = useContext(ApiContext);

	if (!state) {
		throw Error("No AuthApiProvider available");
	}

	return state;
};
