import React, { useState } from "react";

import { searchTermSchema } from "../../types/formSchema";
import useField from "../../hooks/use-field";
import Button from "../../components/button";
import Text from "../../components/text";
import Form from "../../components/form";
import Field from "../../components/field";
import { search } from "../../config/scryfall";
import { Card } from "../../types/card";
import SearchResultCard from "./search-result-card";

const createCard = ({
	name,
	id,
	image_uris,
	ban = [],
	dont_ban = [],
}: any): Card => ({ name, id, image_uris, ban, dont_ban });

export default () => {
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
		<div>
			<Form onSubmit={handleSubmit}>
				<Field
					name="search-terms"
					label="Find cards to add to voting"
					{...searchTermsFieldProps}
				/>
				<Button
					title={searchTermsFieldProps.errors.find(() => true)}
					disabled={!valid}
					type="submit"
				>
					<Text>Search</Text>
				</Button>
			</Form>
			<div>
				{cardResults.map((card) => (
					<SearchResultCard key={card.id} card={card} />
				))}
			</div>
		</div>
	);
};
