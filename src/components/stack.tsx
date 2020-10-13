import styled from "styled-components";
import { Spacing } from "../styles/common";

interface StackProps {
	space?: keyof typeof Spacing;
}

export default styled.div`
	flex-direction: column;
	${({ space = "None" }: StackProps) => `margin-top: -${Spacing[space]};

	> * {
		margin: ${Spacing[space]};
	}`}
`;
