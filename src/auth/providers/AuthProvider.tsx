import { PropsWithChildren } from "react";
import { DataProvider } from "./DataProvider";
import { ApiProvider } from "./ApiProvider";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	return (
		<DataProvider>
			<ApiProvider>{children}</ApiProvider>
		</DataProvider>
	);
};
