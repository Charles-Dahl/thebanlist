import React, { useState } from "react";

import { searchTermSchema } from "../../types/formSchema";
import useField from "../../hooks/use-field";
import Form from "../../components/form";
import { search } from "../../config/scryfall";
import { Card } from "../../types/card";
import SearchResultCard from "./search-result-card";
import styled from "styled-components";
import ExpandableSearch from "../../components/expandable-search";
import Grid from "../../components/grid";
import Resizable from "../../components/resizable";
import Text from "../../components/text";

const Container = styled.div`
	position: sticky;
	bottom: 0;
	width: 100%;
	background: var(--color-light-2);
`;

const SearchContainer = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: min-content min-content;
	width: 100%;
	place-items: center;
	padding: 0 1em;
`;

const ResultCount = styled(Text)`
	position: absolute;
	grid-column: 2 / 3;
	right: 0;
`;

const FormContainer = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	z-index: 2;
`;

const createCard = ({
	name,
	id,
	image_uris,
	ban = [],
	dont_ban = [],
}: any): Card => ({ name, id, image_uris, ban, dont_ban });

const AddCardForm = () => {
	const searchTermsFieldProps = useField<string>("", searchTermSchema);
	const [cardResults, setCardResults] = useState<Array<Card>>([]);
	const valid = searchTermsFieldProps.errors.length < 1;
	const handleSubmit = () => {
		if (valid) {
			search(searchTermsFieldProps.value).then((results) =>
				setCardResults(results.data.map(createCard))
			);
		}
	};

	const hasResults = cardResults.length > 0;

	return (
		<Container>
			<Resizable
				allowResize={hasResults}
				StaticComponent={
					<SearchContainer>
						<FormContainer>
							<Form onSubmit={handleSubmit}>
								<ExpandableSearch
									name="search-terms"
									{...searchTermsFieldProps}
								/>
							</Form>
						</FormContainer>
						{hasResults && (
						<ResultCount>Results: {cardResults.length}</ResultCount>
						)}
					</SearchContainer>
				}
			>
				{hasResults && (
					<Grid>
						{cardResults.map((card) => (
							<SearchResultCard key={card.id} card={card} />
						))}
					</Grid>
				)}
			</Resizable>
		</Container>
	);
};

export default AddCardForm;
