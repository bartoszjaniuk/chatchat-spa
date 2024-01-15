import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	LoginFormFieldValues,
	LoginFormSchema,
} from "../../models/loginFormSchema";
import { Input } from "src/app/shared";
import { UserCredentials } from "src/app/api/services/authService/models/userCredentials.types";

type FormProps = {
	signIn: (credentials: UserCredentials) => void;
};

export const Form = ({ signIn }: FormProps) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<LoginFormFieldValues>({
		mode: "all",
		resolver: zodResolver(LoginFormSchema),
	});

	const onSubmit = (data: LoginFormFieldValues) => {
		signIn(data);
		reset();
	};

	return (
		<form
			className="pt-4 flex flex-col gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				id="email"
				type="email"
				name="email"
				label="Email"
				placeholder="Enter your email"
				register={register}
				errors={errors}
			/>

			<Input
				id="password"
				type="password"
				name="password"
				label="Hasło"
				placeholder="Enter your password"
				register={register}
				errors={errors}
			/>

			<button
				className="bg-primary text-white active:bg-emerald-600 w-full lg:w-auto  uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-300 disabled:cursor-not-allowed"
				type="submit"
				disabled={!isValid}
			>
				Sign in
			</button>
		</form>
	);
};
