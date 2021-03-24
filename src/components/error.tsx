import React from "react";
import styled from "styled-components";

interface ErrorProps {
	errors: Array<string>;
}

const ErrorContainer = styled.div`
	color: var(--color-error);
	backdrop-filter: opacity(0.5);
	font-weight: 500;
	width: 100%;
	box-shadow: 0px -2px 0px 0px var(--color-error);
`;

const Error = ({ errors }: ErrorProps) => {
	return (
		<ErrorContainer>
			{errors.map((error) => (
				<li key={error}>
					<em>{error}</em>
				</li>
			))}
		</ErrorContainer>
	);
};

export default Error;
