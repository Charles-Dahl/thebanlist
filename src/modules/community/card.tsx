import React from "react";

import { Card } from "../../types/cards";

type CardProps = {
	card: Card;
};

export default ({ card }: CardProps) => (
	<img
		src={card.image_uris.normal}
		alt={card.name}
		width={315}
		height={440}
	></img>
);
