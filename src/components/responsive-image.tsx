import React from "react";
import styled from "styled-components";

interface ResponsiveImageProps {
	src: string;
	alt: string;
	width: number;
}

const StyledImage = styled.img`
	max-width: ${({ width }: ResponsiveImageProps) => width}px;
	width: 100%;
	height: auto;
`;

const ResponsiveImage = ({ src, alt, width }: ResponsiveImageProps) => {
	return <StyledImage src={src} alt={alt} width={width} />;
};

export default ResponsiveImage;
