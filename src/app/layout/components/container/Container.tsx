import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-full w-full md:pl-56">
			<div className="w-full h-full">{children}</div>
		</div>
	);
};
