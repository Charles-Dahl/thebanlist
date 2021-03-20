import React, { MouseEvent, useRef } from "react";
import styled from "styled-components";

const Label = styled.label`
	outline: none;
	transition: transform 250ms ease-in;
	transform: var(--focus-toggle-transform);
	padding: 1em;
	:hover {
		cursor: pointer;
	}
`;

const FocusToggle: React.FC = ({ children }) => {
	const labelRef = useRef<HTMLLabelElement>(null);

	const handleClick = (event: MouseEvent<HTMLLabelElement>) => {
		event.preventDefault();
		if (document.activeElement && labelRef.current) {
			if (document.activeElement === labelRef.current) {
				return labelRef.current.blur();
			}
			return labelRef.current.focus();
		}
	};

	return (
		<Label ref={labelRef} onMouseDown={handleClick} tabIndex={-1}>
			{children}
		</Label>
	);
};

export default FocusToggle;
