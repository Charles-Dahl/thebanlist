import React from "react";
import styled from "styled-components";

import { Card } from "../../types/card";
import ResponsiveImage from "../../components/responsive-image";
import { useUser } from "../authentication/user-provider";
import UserControls from "./card-user-controls";
import BannedIndicator from "./banned-indicator";

type CardProps = {
	card: Card;
};

const Container = styled.div`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
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
			<BannedIndicator banned={banned}>
				{banned ? "Banned" : "Allowed"}
			</BannedIndicator>
			{user && <UserControls user={user} card={card} />}
		</Container>
	);
};
