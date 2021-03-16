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
	height: 50px;
	width: 36px;
	background: var(--gradient-primary);
	border-radius: 2px;
	border: 1px solid var(--color-light-3);
`;

const CardContainer = styled.div`
	height: 150px;
	width: 36px;
	position: absolute;
	z-index: 1;
	transform: rotate(${({ offset }: { offset: string }) => offset});
`;

const MovingCardContainer = styled(CardContainer)`
	animation-name: ${cardAnimation};
	animation-duration: 2s;
	animation-iteration-count: infinite;
`;

const Container = styled.div`
	position: relative;
	height: 210px;
	width: 210px;
	padding: 30px;

	animation-name: ${containerAnimation};
	animation-duration: 2s;
	animation-iteration-count: infinite;
`;

const Preloader = () => {
	return (
		<Container>
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

export default Preloader;
