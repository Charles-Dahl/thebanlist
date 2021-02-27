import React, { FormEvent } from "react";

interface FormProps {
	onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit = () => {} }) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit();
	};

	return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
