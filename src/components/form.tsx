import React, { FormEvent, ReactNode } from "react";

type FormProps = { children: ReactNode; onSubmit: () => void };

export default ({ children, onSubmit = () => {} }: FormProps) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit();
	};

	return <form onSubmit={handleSubmit}>{children}</form>;
};
