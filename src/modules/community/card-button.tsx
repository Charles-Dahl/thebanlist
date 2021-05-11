import React from "react";
import styled from "styled-components";

import Button from "../../components/button";
import Icon, { iconNames } from "../../components/icon";

interface CardButtonProps {
	icon: keyof typeof iconNames;
	onClick?: () => void;
	title?: string;
}

const Container = styled(Button)`
	--color-icon: var(--color-light-3);

	flex: 1;
	position: relative;
	background: var(--color-overlay);
	backdrop-filter: blur(1px);
	border-radius: 0;
	outline: none;

	:focus,
	:hover {
		outline: none;
		backdrop-filter: blur(0);
		filter: brightness(200%);
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
