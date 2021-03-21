import React from "react";

import { Community } from "../../types/community";
import Paragraph from "../../components/paragraph";
import styled from "styled-components";
import Icon from "../../components/icon";

type CommunityProps = {
	community: Community;
};

const Container = styled.a`
	--icon-opacity: 0;
	--icon-position: translateX(-100px);
	--color-icon: var(--color-overlay);
	--font-size-icon: 5em;
	--color: var(--color-dark-2);
	--font-size: var(--font-size-small);

	width: 100%;
	height: clamp(150px, 20vw, 252px);
	padding: var(--spacing);
	font-family: var(--font-family-accent);
	cursor: pointer;
	text-decoration: none;
	transition: background 150ms ease-in-out;
	justify-content: flex-start;
	background: var(--color-light-3);
	text-align: center;
	position: relative;

	:hover,
	:focus {
		--icon-opacity: 0.7;
		--icon-position: translateX(0);

		filter: brightness(105%);
	}
`;

const IconContainer = styled.div`
	position: absolute;
	transform: var(--icon-position);
	bottom: 0;
	right: 0;
	transition: all 250ms ease-in-out;
	opacity: var(--icon-opacity);
`;

export default ({ community }: CommunityProps) => {
	return (
		<Container href={`/community/${community.id}`}>
			<Paragraph>{community.name}</Paragraph>
			<IconContainer>
				<Icon name="chevron_right" />
			</IconContainer>
		</Container>
	);
};
