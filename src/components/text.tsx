import styled from "styled-components";

import { iconNames } from "./icon";

interface TextProps {
	icon?: keyof typeof iconNames;
	iconBefore?: keyof typeof iconNames;
}

const Text = styled.span<TextProps>`
	color: var(--color);
	font-size: var(--font-size);
	flex-direction: row;
	position: relative;
	padding: 0.5em 1.5em;
	text-overflow: ellipsis;
	white-space: nowrap;

	${({ icon }) =>
		icon
			? `
        :after {
            content: '${icon}';
            font-family: 'Material Icons';
            position: absolute;
            right: 0;
            opacity: 0.5;
            font-variant: normal;
            font-style: normal;
        }
        `
			: ""}

	${({ iconBefore }) =>
		iconBefore &&
		`
        :before {
            content: '${iconBefore}';
            font-family: 'Material Icons';
            position: absolute;
            left: 0;
            opacity: 0.5;
            font-variant: normal;
            font-style: normal;
        }
        `}
`;

export default Text;
