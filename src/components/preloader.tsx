import React from "react";
import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
    0% {transform: rotate(40deg); z-index: 1;}
    100% {transform: rotate(300deg); z-index: 0;}
`;

const containerAnimation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(20deg);}
`;

const Card = styled.div`
	height: 1.05em;
	width: 0.75em;
	background: var(--gradient-primary);
	border-radius: 2px;
	border: 1px solid var(--color-light-3);
`;

const CardContainer = styled.div`
	height: 3.15em;
	width: 0.75em;
	position: absolute;
	z-index: 1;
	transform: rotate(${({ offset }: { offset: string }) => offset});
`;

const MovingCardContainer = styled(CardContainer)`
	animation-name: ${cardAnimation};
	animation-duration: 2s;
	animation-iteration-count: infinite;
`;

const sizes = {
	small: "1rem",
	medium: "2rem",
	large: "3rem",
};

const Container = styled.div<PreloaderProps>`
	--font-size: ${({ size }) => sizes[size]};
	font-size: var(--font-size);
	flex-shrink: 0;
	position: relative;
	height: 4em;
	width: 4em;
	padding: 0.425em;

	animation-name: ${containerAnimation};
	animation-duration: 2s;
	animation-iteration-count: infinite;
`;

interface PreloaderProps {
	size: keyof typeof sizes;
}

const Preloader = ({ size }: PreloaderProps) => {
	return (
		<Container size={size}>
			<CardContainer offset="-40deg">
				<Card></Card>
			</CardContainer>
			<CardContainer offset="-20deg">
				<Card></Card>
			</CardContainer>
			<CardContainer offset="0deg">
				<Card></Card>
			</CardContainer>
			<CardContainer offset="20deg">
				<Card></Card>
			</CardContainer>
			<MovingCardContainer offset="40deg">
				<Card></Card>
			</MovingCardContainer>
		</Container>
	);
};

Preloader.defaultProps = {
	size: "medium",
};

export default Preloader;
