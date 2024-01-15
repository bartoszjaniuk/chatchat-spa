export type FormErrorMessageProps = {
	className?: string;
	children: React.ReactNode;
};

export const FormErrorMessage = ({
	children,
	className,
}: FormErrorMessageProps) => <p className={className}>{children}</p>;
