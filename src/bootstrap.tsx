import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import { ReactQueryProvider } from "./app/providers/reactQueryProvider/ReactQueryProvider";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

import { GlobalAuthProvider } from "./app/providers/authProvider/AuthProvider";
import { ErrorBoundaryWrapper } from "./app/layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryWrapper>
			<BrowserRouter>
				<QueryParamProvider adapter={ReactRouter6Adapter}>
					<ReactQueryProvider>
						<GlobalAuthProvider>
							<App />
						</GlobalAuthProvider>
					</ReactQueryProvider>
				</QueryParamProvider>
			</BrowserRouter>
		</ErrorBoundaryWrapper>
	</React.StrictMode>,
);
