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
	--menu-transition: opacity 100ms ease-in-out;
	--color: var(--color-light-1);

	position: absolute;
	top: 0;
	right: 0;
	align-items: flex-end;
	width: 100%;

	:focus-within {
		--menu-transform: scale(1, 1);
		--menu-opacity: 1;
		--focus-toggle-transform: rotate(90deg);
		--menu-transition: opacity 200ms ease-in-out 200ms;
	}
`;

const MenuContainer = styled.div`
	background-color: var(--color-overlay);
	transform: var(--menu-transform);
	transform-origin: top;
	transition: transform 250ms ease-in-out;
	border-radius: 3px 0;
	padding: var(--spacing-medium);

	> * {
		opacity: var(--menu-opacity);
		transition: var(--menu-transition);
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
