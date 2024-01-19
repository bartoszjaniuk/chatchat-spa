import { useContext } from "react";
import { DataStateContext } from "../contexts/dataContext";

export const useData = () => {
	const state = useContext(DataStateContext);

	if (!state) {
		throw Error("No DataProvider available");
	}

	return state;
};
