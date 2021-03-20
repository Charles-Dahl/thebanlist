import React from "react";
import styled from "styled-components";

import Text from "./text";
import Checkbox, { CheckboxProps } from "./checkbox";

const Label = styled.label.attrs({ tabIndex: -1 })`
	flex-direction: row;
	width: 100%;
	outline: none;
	justify-content: flex-start;
	gap: var(--spacing-small);
	cursor: pointer;
	border-radius: 3px;
	transition: outline-offset 100ms ease-in-out;
	outline-offset: 0px;
	color: var(--color);

	:focus-within,
	:hover {
		outline: 2px solid var(--color-brand-2);
		outline-offset: 4px;
	}
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
