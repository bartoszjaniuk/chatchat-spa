import { useContext } from "react";
import { DataDispatchContext } from "src/provider/data/DataContext";

export const useDispatchData = () => {
	const context = useContext(DataDispatchContext);

	if (typeof context === "undefined") {
		throw new Error(
			"useDispatchData hook is not wrapped by DispatchDataProvider",
		);
	}

	return context;
};
