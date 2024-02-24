import { z } from "zod";

export const LoginFormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email address"),
	// password: z.string().refine((password) => password.match(PASSWORD_REGEX), {
	// 	message:
	// 		"Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number and one special character",
	// }),
	password: z.string(),
});

export type LoginFormFieldValues = z.infer<typeof LoginFormSchema>;
