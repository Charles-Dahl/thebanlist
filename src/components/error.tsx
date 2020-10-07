import React, { ReactNode } from "react";

export type ErrorProps = {
	children: ReactNode;
};

export default ({ children }: ErrorProps) => {
	return <em>{children}</em>;
};
