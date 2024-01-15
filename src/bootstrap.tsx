import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import { ReactQueryProvider } from "./provider/reactQueryProvider/ReactQueryProvider";
import { ErrorBoundaryWrapper } from "./app/errorBoundaryWrapper";
import { AuthProvider } from "./provider/auth/authProvider";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryWrapper>
			<ReactQueryProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ReactQueryProvider>
		</ErrorBoundaryWrapper>
	</React.StrictMode>,
);
