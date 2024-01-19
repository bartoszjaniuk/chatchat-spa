import { useContext } from "react";
import { DataDispatchContext } from "../contexts/dataContext";

export const useDispatch = () => {
	const dispatch = useContext(DataDispatchContext);

	if (!dispatch) {
		throw Error("No DispatchProvider available");
	}

	return dispatch;
};
