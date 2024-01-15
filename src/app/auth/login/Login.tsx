import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";
import { Form } from "./components/form/Form";

type LoginProps = {
	signIn: (credentials: UserCredentials) => void;
};

export const Login = ({ signIn }: LoginProps) => {
	return (
		<main className="bg-gray-50">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
				>
					<img
						className="w-8 h-8 mr-2"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
						alt="logo"
					/>
					Chat Chat
				</a>
				<div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
					<Form signIn={signIn} />
				</div>
			</div>
		</main>
	);
};
