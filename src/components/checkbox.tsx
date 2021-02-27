import React from "react";
import styled from "styled-components";

export interface CheckboxProps {
	name?: string;
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

const Checkbox: React.FC<CheckboxProps> = ({
	onChange = () => {},
	value,
	...rest
}) => {
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

export default Checkbox;
