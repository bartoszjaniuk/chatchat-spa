import "src/styles/styles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Container } from "./container/Container";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};
