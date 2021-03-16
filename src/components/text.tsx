import styled from "styled-components";

import { iconNames } from "./icon";

interface TextProps {
	icon?: keyof typeof iconNames;
}

const Text = styled.span`
	color: var(--color);
	font-size: var(--font-size);
	flex-direction: row;
	position: relative;
	padding: 0.5em 1.5em;

	${({ icon }: TextProps) =>
		icon
			? `
        :after {
            content: '${icon}';
            font-family: 'Material Icons';
            position: absolute;
            right: 0;
            opacity: 0.5;
        }
        `
			: ""}
`;

export default Text;
