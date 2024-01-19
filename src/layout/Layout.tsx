import "src/styles/styles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Container } from "./container/Container";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<Container>{children}</Container>
		</div>
	);
};
