import React from "react";
import styled from "styled-components";

import ResponsiveImage from "../../components/responsive-image";

interface CardProps {
	image: string;
	name: string;
}

const Container = styled.div`
	--border-radius: 10px;
	position: relative;
	border-radius: var(--border-radius);
	overflow: hidden;
`;

const Card: React.FC<CardProps> = ({ image, name, children }) => {
	return (
		<Container>
			<ResponsiveImage src={image} alt={name} width={252} />
			{children}
		</Container>
	);
};

export default Card;
