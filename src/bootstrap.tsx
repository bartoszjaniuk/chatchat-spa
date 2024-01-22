import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import { ReactQueryProvider } from "./app/providers/reactQueryProvider/ReactQueryProvider";
import { ErrorBoundaryWrapper } from "./app/layout/errorBoundaryWrapper";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalAuthProvider } from "./app/providers/authProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryWrapper>
			<BrowserRouter>
				<ReactQueryProvider>
					<GlobalAuthProvider>
						<App />
					</GlobalAuthProvider>
				</ReactQueryProvider>
			</BrowserRouter>
		</ErrorBoundaryWrapper>
	</React.StrictMode>,
);
