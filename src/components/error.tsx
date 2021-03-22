import React from "react";
import styled from "styled-components";

interface ErrorProps {
	errors: Array<string>;
}

const ErrorContainer = styled.div`
	display: var(--error-display);
	position: absolute;
	top: calc(-100% - 20px);
	left: 50%;
	right: 50%;
`;

const ErrorInnerContainer = styled.ul`
	background: var(--color-background);
	white-space: nowrap;
	padding: var(--spacing-medium) var(--spacing-large);
	margin: 0;
	border: 0 solid var(--color-error);
	border-bottom-width: 3px;
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
