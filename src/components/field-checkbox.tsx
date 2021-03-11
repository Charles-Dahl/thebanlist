import React from "react";
import styled from "styled-components";

import Checkbox, { CheckboxProps } from "./checkbox";
import Text from "./text";
import Error from "./error";

interface FieldProps extends CheckboxProps {
	label: string;
	errors?: Array<string>;
	touched?: boolean;
}

const StyledLabel = styled.label`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 10px;
`;

const FieldCheckbox: React.FC<FieldProps> = ({
	name,
	label,
	errors = [],
	touched = false,
	...rest
}) => {
	return (
		<StyledLabel htmlFor={name}>
			<Checkbox name={name} {...rest} />
			<Text>{label}</Text>
			{touched &&
				errors.length > 0 &&
				errors.map((error) => <Error>{error}</Error>)}
		</StyledLabel>
	);
};

export default FieldCheckbox;
