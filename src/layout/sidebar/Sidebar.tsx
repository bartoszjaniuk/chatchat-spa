import { Link } from "react-router-dom";
import { AppRoutes, OtherRoutes } from "./enums/appRoutes.enum";
import { useLogout } from "src/core/useLogout";

export const Sidebar = () => {
	const { refetch } = useLogout();
	return (
		<nav className="min-h-full w-96 bg-white p-4">
			<Link to={AppRoutes.HOME}>
				<div className="flex flex-col items-center border-b pb-4">
					<h1 className="text-lg">Advanced React</h1>
					<p className="text-blue-500">Playground</p>
				</div>
			</Link>

			<ul className="list-disc pl-4 text-blue-400">
				{Object.values(OtherRoutes).map((route, index) => (
					<li key={index} className="underline text-black py-1">
						<Link to={route}>Chapter {index + 1}</Link>
					</li>
				))}
				<li onClick={() => refetch()}>Log Out</li>
			</ul>
		</nav>
	);
};
