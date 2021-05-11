import React from "react";
import styled from "styled-components";

import ResponsiveImage from "../../components/responsive-image";

interface CardProps {
	image: string;
	name: string;
}

const Container = styled.div`
	border-radius: 10px;
	position: relative;
	overflow: hidden;
`;

const BorderedImage = styled(ResponsiveImage)`
	border-radius: inherit;
	border: 0.5px solid var(--color-dark-1);
`;

const Card: React.FC<CardProps> = ({ image, name, children }) => {
	return (
		<Container>
			<BorderedImage src={image} alt={name} width={252} />
			{children}
		</Container>
	);
};

export default Card;
