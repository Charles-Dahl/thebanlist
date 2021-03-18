import React from "react";
import styled from "styled-components";

import Text from "./text";
import Checkbox, { CheckboxProps } from "./checkbox";

const Label = styled.label.attrs({ tabIndex: -1 })`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 10px;
	outline: none;
`;

interface CheckboxLabelledProps extends CheckboxProps {
	label: string;
	id: string;
}

const CheckboxLabelled = ({ label, id, ...rest }: CheckboxLabelledProps) => {
	return (
		<Label htmlFor={id} tabIndex={-1}>
			<Checkbox id={id} {...rest}></Checkbox>
			<Text>{label}</Text>
		</Label>
	);
};

export default CheckboxLabelled;
