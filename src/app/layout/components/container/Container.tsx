import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-full w-full md:pl-56">
			<div className="w-full h-full pl-4">{children}</div>
		</div>
	);
};
