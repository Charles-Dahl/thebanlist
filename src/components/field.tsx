import React from "react";
import styled from "styled-components";

import Input, { InputProps } from "./input";
import Text from "./text";
import Error from "./error";
import Stack from "./stack";

interface FieldProps extends InputProps {
	label: string;
	errors?: Array<string>;
	touched?: boolean;
}

const StyledLabel = styled.label`
	align-items: flex-start;
`;

const Field: React.FC<FieldProps> = ({
	name,
	label,
	errors = [],
	touched = false,
	...rest
}) => {
	return (
		<StyledLabel htmlFor={name}>
			<Stack space="Small">
				<Text size="Small">{label}</Text>
				<Input name={name} {...rest} />
				{touched &&
					errors.length > 0 &&
					errors.map((error) => <Error>{error}</Error>)}
			</Stack>
		</StyledLabel>
	);
};

export default Field;
