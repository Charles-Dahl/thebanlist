import React, { FormEvent } from "react";
import styled from "styled-components";

export interface InputProps {
	name?: string;
	placeholder?: string;
	title?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	onBlur?: () => void;
}

const StyledInput = styled.input`
	border-width: 0.5px;
	border-color: #eeeeee;
	padding: 10px;
`;

const Input: React.FC<InputProps> = ({ onChange = () => {}, ...rest }) => {
	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};
	return <StyledInput onChange={handleChange} {...rest} />;
};

export default Input;
