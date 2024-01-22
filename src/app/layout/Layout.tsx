import "src/styles/styles.css";
import { Container } from "./components/container/Container";
import { PropsWithChildren } from "react";
import { Sidebar } from "./components/sidebar/Sidebar";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex min-h-screen h-full relative ">
			<Sidebar />
			<Container>{children}</Container>
		</div>
	);
};
