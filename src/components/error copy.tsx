import React from "react";
import styled from "styled-components";

interface ErrorProps {
	errors: Array<string>;
}

const ErrorContainer = styled.div`
	z-index: 10;
	display: var(--error-display);
	position: absolute;
	bottom: calc(-100% - 20px);
	left: 50%;
	right: 50%;
`;

const ErrorInnerContainer = styled.ul`
	color: var(--color-light-2);
	text-shadow: 1px 1px var(--color-dark-2);
	background: var(--color-overlay);
	white-space: nowrap;
	padding: var(--spacing-medium) var(--spacing-large);
	margin: 0;
	border: 0 solid var(--color-error);
	border-bottom-width: 2px;
	backdrop-filter: blur(2px);
`;

const Triangle = styled.div`
	border: 10px solid #000;
	border-color: var(--color-error) transparent transparent transparent;
`;

const Error = ({ errors }: ErrorProps) => {
	return (
		<ErrorContainer>
			<ErrorInnerContainer>
				{errors.map((error) => (
					<li key={error}>
						<em>{error}</em>
					</li>
				))}
			</ErrorInnerContainer>
			<Triangle />
		</ErrorContainer>
	);
};

export default Error;
