import React from "react";
import styled from "styled-components";

import Button from "../../components/button";
import Icon, { iconNames } from "../../components/icon";

interface ContainerProps {
	right?: boolean;
	left?: boolean;
}

interface CardButtonProps extends ContainerProps {
	icon: keyof typeof iconNames;
	onClick?: () => void;
}

const Container = styled(Button)<ContainerProps>`
	position: relative;
	background: none;
	border-radius: 0;
	border: 2px solid transparent;
	${({ right }) =>
		right && "border-bottom-right-radius: var(--border-radius);"}
	${({ left }) => left && "border-bottom-left-radius: var(--border-radius);"}

	:focus,
	:hover {
		border-color: var(--color-brand-2);
		--color-icon: var(--color-brand-2);
		outline: none;
	}
`;

const CardButton = ({ icon, ...rest }: CardButtonProps) => {
	return (
		<Container {...rest}>
			<Icon name={icon} />
		</Container>
	);
};

export default CardButton;
