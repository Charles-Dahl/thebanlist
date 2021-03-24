import React from "react";
import styled from "styled-components";

import Icon from "./icon";
import Input from "./input";

const StyledInput = styled(Input)`
	font-size: 1em;
	background: transparent;
	border: none;
	height: var(--size);
	position: absolute;
	cursor: var(--input-cursor);
	opacity: var(--input-opacity);
	transition: opacity 450ms ease-in;
	padding: var(--spacing-small);
	width: calc(100% - var(--size));
	min-width: var(--size);
	z-index: 2;

	:focus {
		outline: none;
	}
`;

const Button = styled.button`
	font-size: 1.5em;
	height: calc(var(--size) - 8px);
	width: calc(var(--size) - 8px);
	justify-content: center;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin-left: auto;
	margin-right: 4px;
	background: var(--gradient-primary);
	color: var(--button-color);
	outline: none;
	transform: rotate(var(--button-rotation));
	transition: transform 650ms ease-in-out;

	:focus {
		box-shadow: 0 0 0 4px var(--color-brand-2);
	}

	:hover {
		filter: hue-rotate(20deg);
	}

	:hover:disabled {
		filter: saturate(0.1);
		cursor: not-allowed;
	}
`;

const Container = styled.div`
	--size: 50px;
	--input-cursor: pointer;
	--input-opacity: 0;
	--button-background: var(--color-accent);
	--button-color: var(--color-light-1);
	--button-rotation: 0deg;
	--error-display: none;

	flex-direction: row;
	background: var(--color-background);
	width: var(--size);
	height: var(--size);
	max-width: 600px;
	transition: width 350ms ease-in-out, background 350ms ease-in-out;
	position: relative;
	font-size: var(--font-size-small);
	border-radius: 3px;

	:focus-within,
	:hover {
		background: var(--color-light-1);
		width: 100%;
		box-shadow: 0 0 0 2px var(--color-background),
			0 0 0 4px var(--color-brand-3);

		/* input */
		--input-cursor: initial;
		--input-opacity: 1;

		/* button */
		--button-rotation: 360deg;

		/* error */
		--error-display: flex;
	}
`;

interface ExpandableSearchProps {
	errors: Array<string>;
	name?: string;
	touched?: boolean;
	value?: string;
	type?: string;
	onChange?: (value: string) => void;
	onBlur?: () => void;
}

const ExpandableSearch = ({
	errors = [],
	touched,
	...rest
}: ExpandableSearchProps) => {
	return (
		<Container>
			<StyledInput
				title="Search"
				placeholder="Search for cards to add"
				{...rest}
			/>
			<Button
				disabled={errors.length > 0}
				title={errors.length > 0 ? errors[0] : "Search"}
				type="submit"
			>
				<Icon name="search" />
			</Button>
		</Container>
	);
};

export default ExpandableSearch;
