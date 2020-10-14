import React from "react";
import styled from "styled-components";

export type CheckboxProps = {
	name?: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
	onBlur?: () => void;
};

const StyledInput = styled.input`
	border-width: 0.5px;
	border-color: #eeeeee;
	padding: 10px;
	transform: scale(1.5);
`;

export default ({ onChange = () => {}, value, ...rest }: CheckboxProps) => {
	const handleChange = () => {
		onChange(!value);
	};
	return (
		<StyledInput
			checked={value}
			type="checkbox"
			onChange={handleChange}
			{...rest}
		/>
	);
};
