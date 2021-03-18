import React from "react";
import styled from "styled-components";

import Icon from "./icon";
import FocusToggle from "./focus-toggle";
import { iconNames } from "./icon";

interface DropdownMenuProps {
	icon: keyof typeof iconNames;
}

const Container = styled.div`
	--menu-transform: scale(1, 0);
	--menu-opacity: 0;
	--focus-toggle-transform: rotate(0deg);

	position: absolute;
	top: 0;
	right: 0;
	align-items: flex-end;
	width: 100%;

	:focus-within {
		--menu-background: var(--color-overlay);
		--menu-transform: scale(1, 1);
		--menu-opacity: 1;
		--focus-toggle-transform: rotate(90deg);
	}
`;

const MenuContainer = styled.div`
	background-color: var(--menu-background);
	transform: var(--menu-transform);
	transform-origin: top right;
	transition: transform 250ms ease-in-out;
	border-radius: 3px 0;

	> * {
		opacity: var(--menu-opacity);
		transition: opacity 150ms ease-in 150ms;
	}
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ icon, children }) => {
	return (
		<Container>
			<FocusToggle>
				<Icon name={icon} />
			</FocusToggle>
			<MenuContainer>{children}</MenuContainer>
		</Container>
	);
};

export default DropdownMenu;
