import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import { ReactQueryProvider } from "./provider/reactQueryProvider/ReactQueryProvider";
import { ErrorBoundaryWrapper } from "./app/errorBoundaryWrapper";
import { App } from "./App";
import { AuthProvider } from "./provider/auth/authProvider";
import { DataProvider } from "./provider/data/DataProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryWrapper>
			<ReactQueryProvider>
				<DataProvider>
					<AuthProvider>
						<App />
					</AuthProvider>
				</DataProvider>
			</ReactQueryProvider>
		</ErrorBoundaryWrapper>
	</React.StrictMode>,
);
