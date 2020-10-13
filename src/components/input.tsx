import React, { FormEvent } from "react";
import styled from "styled-components";

export type InputProps = {
	name?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	onBlur?: () => void;
};

const StyledInput = styled.input`
	border-width: 0.5px;
	border-color: #eeeeee;
	padding: 10px;
`;

export default ({ onChange = () => {}, ...rest }: InputProps) => {
	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value);
	};
	return <StyledInput onChange={handleChange} {...rest} />;
};
