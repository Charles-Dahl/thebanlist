import React from "react";

import styled from "styled-components";
import useFindCommunities from "./hooks/use-find-communities";
import Community from "./community";
import Button from "../../components/button";
import Link from "../../components/link";
import Text from "../../components/text";
import { useUser } from "../authentication/user-provider";
import Preloader from "../../components/preloader";
import Grid from "../../components/grid";
import Icon from "../../components/icon";

const CreateButton = styled.a`
	width: 100%;
	height: clamp(150px, 20vw, 252px);
	color: var(--color);
	padding: var(--spacing);
	font-family: var(--font-family-accent);
	cursor: pointer;
	text-decoration: none;
	transition: background 150ms ease-in-out;
	flex-direction: row;
	--color-icon: var(--color-light-2);
	--font-size-icon: 5em;
	justify-content: center;
	background: var(--color-brand-1);

	:hover,
	:focus {
		filter: brightness(120%);
	}
`;

const LoadButton = styled.button`
	--color-icon: var(--color-overlay);
	--font-size-icon: 5em;

	width: 100%;
	height: clamp(150px, 20vw, 252px);
	color: var(--color);
	padding: var(--spacing);
	font-family: var(--font-family-accent);
	cursor: pointer;
	text-decoration: none;
	transition: background 150ms ease-in-out;
	flex-direction: row;
	justify-content: center;
	background: var(--color-light-2);
	border: 0;
	outline: none;

	:hover,
	:focus {
		filter: brightness(120%);
	}
`;

const PublicCommunityList = () => {
	const [communities, loading, loadMore] = useFindCommunities({
		where: [["isPublic", "==", true]],
	});
	const user = useUser();

	return (
		<Grid>
			{user ? (
				<CreateButton href="/community/new" title="Create a Community">
					<Icon name="add" />
				</CreateButton>
			) : null}
			{communities.map((community) => (
				<Community key={community.id} community={community} />
			))}
			<LoadButton onClick={loadMore} title="Load More Communities">
				{loading ? <Preloader /> : <Icon name="refresh" />}
			</LoadButton>
		</Grid>
	);
};

export default PublicCommunityList;
