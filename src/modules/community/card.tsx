import React from "react";
import styled from "styled-components";

import { Card } from "../../types/card";
import ResponsiveImage from "../../components/responsive-image";
import { useUser } from "../authentication/user-provider";
import UserControls from "./card-user-controls";
import { BackgroundColor, FontSize } from "../../styles/common";

type CardProps = {
	card: Card;
};

const Container = styled.div`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
`;

interface BannedIndicatorStyleProps {
	tone?: keyof typeof BackgroundColor;
}

const BannedIndicator = styled.strong`
	justify-content: center;
	background-color: var(--color-overlay);
	color: ${({ tone = "Error" }: BannedIndicatorStyleProps) =>
		BackgroundColor[tone]};
	text-shadow: 3px 3px #282828;
	font-size: ${FontSize.Large};
	position: absolute;
	top: 20%;
	left: 0;
	right: 0;
	bottom: 50%;
`;

export default ({ card }: CardProps) => {
	const user = useUser();
	const banned = card.ban.length > card.dont_ban.length;
	return (
		<Container>
			<ResponsiveImage
				src={card.image_uris.normal}
				alt={card.name}
				width={252}
			/>
			<BannedIndicator tone={banned ? "Error" : "Success"}>
				{banned ? "Banned" : "Allowed"}
			</BannedIndicator>
			{user && <UserControls user={user} card={card} />}
		</Container>
	);
};
