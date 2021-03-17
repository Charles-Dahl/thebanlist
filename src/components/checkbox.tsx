import React, { forwardRef, RefObject } from "react";
import styled from "styled-components";

export interface CheckboxProps {
	name?: string;
	id?: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
	onBlur?: () => void;
}

const StyledInput = styled.input`
	border-width: 0.5px;
	border-color: #eeeeee;
	padding: 10px;
	transform: scale(1.5);
`;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ onChange = () => {}, value, ...rest }, ref) => {
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
	}
);

export default Checkbox;
