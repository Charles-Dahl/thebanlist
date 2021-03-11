import React from "react";

import styled from "styled-components";
import useFindCommunities from "./hooks/use-find-communities";
import Community from "./community";
import { BackgroundColor } from "../../styles/common";
import Button from "../../components/button";
import Link from "../../components/link";
import Text from "../../components/text";
import Icon from "../../components/icon";
import { useUser } from "../authentication/user-provider";

const Container = styled.div`
	background-color: ${BackgroundColor.Secondary};
	border: var(--color-light-3) solid 0.5px;
	border-radius: 6px;
	overflow: hidden;
	--border-radius: 0;
	width: 100%;
`;

export default () => {
	const [communities, loading, loadMore] = useFindCommunities({
		where: [["isPublic", "==", true]],
	});
	const user = useUser();

	return (
		<Container>
			{user ? (
				<Link href="/community/new">
					<Icon name="add" />
					<Text>Create New Community</Text>
				</Link>
			) : null}
			{loading && <Text>Loading Communities</Text>}
			{communities.map((community) => (
				<Community key={community.id} community={community} />
			))}
			<Button onClick={loadMore}>
				<Text>Load More</Text>
			</Button>
		</Container>
	);
};
