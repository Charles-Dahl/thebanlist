import React, { FormEvent } from "react";
import styled from "styled-components";

interface FormProps {
	onSubmit: () => void;
}

const Container = styled.form`
	width: 100%;
`;

const Form: React.FC<FormProps> = ({ children, onSubmit = () => {} }) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit();
	};

	return <Container onSubmit={handleSubmit}>{children}</Container>;
};

export default Form;
