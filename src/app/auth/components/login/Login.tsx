import { UserCredentials } from "src/app/api";
import LogoUrl from "src/assets/chatchat-logo.png";
import { Form } from "../form/Form";

type LoginProps = {
	signIn: (credentials: UserCredentials) => void;
};

export const Login = ({ signIn }: LoginProps) => {
	return (
		<main className="bg-gray-50">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<p className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
					<img className="w-10 h-10 mr-2" src={LogoUrl} alt="logo" />
					Chat Chat
				</p>
				<div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
					<Form signIn={signIn} />
				</div>
			</div>
		</main>
	);
};
