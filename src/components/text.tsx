import styled from "styled-components";

import { FontSize, ForegroundColor } from "../styles/common";

interface TextProps {
	size?: keyof typeof FontSize;
	tone?: keyof typeof ForegroundColor;
}

const Text = styled.span`
	${({ tone = "Primary", size = "Medium" }: TextProps) => `
	color: ${ForegroundColor[tone]};
	font-size: ${FontSize[size]};
    `}
`;

export default Text;
