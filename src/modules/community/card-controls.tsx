import styled from "styled-components";

const CardControls = styled.div`
	--color-icon: var(--color-light-1);
	--font-size-icon: var(--font-size-medium);

	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	flex-direction: row;
	background: var(--color-overlay);
	border-radius: 0 0 var(--border-radius) var(--border-radius);
`;

export default CardControls;
