import { useContext } from "react";
import { DataStateContext } from "src/provider/data/DataContext";

export const useData = () => {
	const context = useContext(DataStateContext);

	if (typeof context === "undefined") {
		throw new Error("useData hook is not wrapped by DataProvider");
	}

	return context;
};
