import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/app/router/enums/appRoutes.enum";

type ThreadProps = {
	id: number;
	title: string;
};
export const Thread = ({ title, id }: ThreadProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${AppRoutes.MESSAGES}/${id}`);
	};

	return (
		<div
			onClick={handleClick}
			className="border border-purple-300 w-full h-16 flex items-center pl-4 hover:cursor-pointer"
		>
			<p>Title: {title}</p>
		</div>
	);
};
