import React from "react";

import styled from "styled-components";
import useFindCommunities from "./hooks/use-find-communities";
import Community from "./community";
import { BackgroundColor } from "../../styles/common";
import Button from "../../components/button";
import Text from "../../components/text";

const Container = styled.div`
	background-color: ${BackgroundColor.Secondary};
	border: black solid 0.5px;
	border-radius: 10px;
	overflow: hidden;
`;

const LoadMoreButton = styled(Button)`
	width: 100%;
	&:hover {
		text-decoration: underline;
	}
`;

export default () => {
	const [communities, loading, loadMore] = useFindCommunities({
		where: [["isPublic", "==", true]],
	});

	return (
		<div>
			<Text>Public Communities</Text>
			<Container>
				{loading && <Text>Loading Communities</Text>}
				{communities.map((community) => (
					<Community key={community.id} community={community} />
				))}
				<LoadMoreButton tone="None" onClick={loadMore}>
					<Text size="Small">Load More</Text>
				</LoadMoreButton>
			</Container>
		</div>
	);
};
