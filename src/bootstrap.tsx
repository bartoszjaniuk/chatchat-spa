import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/styles.css";
import { ReactQueryProvider } from "./provider/reactQueryProvider/ReactQueryProvider";
import { ErrorBoundaryWrapper } from "./app/errorBoundaryWrapper";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalAuthProvider } from "./app/auth/auth.container";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryWrapper>
			<BrowserRouter>
				<ReactQueryProvider>
					{/* <GlobalAuthProvider> */}
					<App />
					{/* </GlobalAuthProvider> */}
				</ReactQueryProvider>
			</BrowserRouter>
		</ErrorBoundaryWrapper>
	</React.StrictMode>,
);
