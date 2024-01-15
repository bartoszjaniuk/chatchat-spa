import { PropsWithChildren, useReducer } from "react";
import { authReducer, initialState } from "./dataReducer";
import { DataDispatchContext, DataStateContext } from "./DataContext";

export const DataProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	return (
		<DataStateContext.Provider value={state}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataStateContext.Provider>
	);
};
