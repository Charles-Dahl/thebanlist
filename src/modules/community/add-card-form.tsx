import React, { useState } from "react";

import { searchTermSchema } from "../../types/formSchema";
import useField from "../../hooks/use-field";
import Button from "../../components/button";
import Text from "../../components/text";
import Form from "../../components/form";
import Stack from "../../components/stack";
import Field from "../../components/field";
import { search } from "../../config/scryfall";
import { Card } from "../../types/card";
import SearchResultCard from "./search-result-card";
import styled from "styled-components";

const Container = styled.div`
	position: sticky;
	bottom: 0;
	width: 100%;
	background: var(--color-light-2);
	--direction: row;
	padding: var(--spacing-small);
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

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Stack>
					<Field
						name="search-terms"
						label="Add Cards"
						{...searchTermsFieldProps}
					/>
					<Button
						title={searchTermsFieldProps.errors.find(() => true)}
						disabled={!valid}
						type="submit"
					>
						<Text>Search</Text>
					</Button>
				</Stack>
			</Form>
			<div>
				{cardResults.map((card) => (
					<SearchResultCard key={card.id} card={card} />
				))}
			</div>
		</Container>
	);
};

export default AddCardForm;
