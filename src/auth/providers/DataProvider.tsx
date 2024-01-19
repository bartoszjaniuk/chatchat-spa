import { PropsWithChildren, useReducer } from "react";
import { dataReducer } from "../reducer/data.reducer";
import { DataDispatchContext, DataStateContext } from "../contexts/dataContext";
import { initialState } from "../constants/initialState";

export const DataProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(dataReducer, initialState);

	return (
		<DataStateContext.Provider value={state}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataStateContext.Provider>
	);
};
