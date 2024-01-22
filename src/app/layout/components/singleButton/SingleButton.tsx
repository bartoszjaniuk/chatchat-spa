import { ComponentProps, PropsWithChildren } from "react";

type SingleButtonProps = {
	icon: JSX.Element;
} & ComponentProps<"button">;

export const SingleButton = ({
	children,
	icon,
	...props
}: PropsWithChildren<SingleButtonProps>) => {
	return (
		<button
			{...props}
			className="border-r last:border-r-0 md:border-0  md:first:border-t md:border-b w-full md:min-h-16 hover:bg-gray-300 transition-all duration-300 ease-in-out "
		>
			<div className="flex items-center justify-center">
				<div className="flex w-16 items-center justify-center">{icon}</div>
				<div className="hidden md:flex w-16 items-center justify-center font-medium">
					{children}
				</div>
			</div>
		</button>
	);
};
