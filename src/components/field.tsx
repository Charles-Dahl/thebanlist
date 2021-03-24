import React from "react";
import styled from "styled-components";

import Input, { InputProps } from "./input";
import Error from "./error";

interface FieldProps extends InputProps {
	label: string;
	errors?: Array<string>;
	touched?: boolean;
}

const Container = styled.div`
	width: 100%;
`;

const LabelText = styled.span`
	pointer-events: none;
	color: var(--color-accent);
	transition: all 300ms;
	transform-origin: top left;
	position: absolute;
	top: 0;
	left: 0;
	padding: var(--spacing) 0;
`;

const FieldInput = styled(Input)`
	background: none;
	border: none;
	padding: var(--spacing) 0;
	:focus {
		box-shadow: none;
	}
`;

const StyledLabel = styled.label`
	--spacing: var(--spacing-medium);

	font-weight: 500;
	align-items: flex-start;
	position: relative;
	width: 100%;
	transition: transform 300ms;
	box-shadow: inset 0 -2px var(--color-light-3);

	:after {
		content: "";
		height: 2px;
		width: 100%;
		background: var(--gradient-primary);
		transform: scaleX(0);
		transition: transform 250ms ease-in;
	}

	:focus-within:after {
		transform: scaleX(1);
	}

	${FieldInput}:not(:placeholder-shown) + ${LabelText},
	${FieldInput}:focus + ${LabelText} {
		transform: translateY(-1.2em) scale(0.8);
	}

	${FieldInput}::placeholder {
		opacity: 0;
		transition: opacity 300ms;
	}

	${FieldInput}:focus::placeholder {
		opacity: 1;
	}
`;

const Field: React.FC<FieldProps> = ({
	name,
	label,
	errors = [],
	touched = false,
	...rest
}) => {
	console.log(errors);
	return (
		<Container>
			<StyledLabel htmlFor={name}>
				<FieldInput name={name} {...rest} />
				<LabelText>{label}</LabelText>
			</StyledLabel>

			{touched && <Error errors={errors} />}
		</Container>
	);
};

export default Field;
