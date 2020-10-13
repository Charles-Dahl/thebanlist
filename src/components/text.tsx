import styled from "styled-components";

import { FontSize, ForegroundColor } from "../styles/common";

interface TextProps {
	size?: keyof typeof FontSize;
	tone?: keyof typeof ForegroundColor;
}

export default styled.span`
	color: ${({ tone = "Primary" }: TextProps) => ForegroundColor[tone]};
	font-size: ${({ size = "Medium" }: TextProps) => FontSize[size]};
`;
