import React, { useState } from "react";

import Button from "../../components/button";
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
	const [searchTerms, setSearchTerms] = useState("");
	const [cardResults, setCardResults] = useState<Array<Card>>([]);

	const handleSubmit = () => {
		search(searchTerms).then((results) =>
			setCardResults(results.data.map(createCard))
		);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Field
					name="search-terms"
					label="Search"
					value={searchTerms}
					onChange={setSearchTerms}
				/>
				<Button type="submit">Search</Button>
			</Form>
			<div>
				{cardResults.map((card) => (
					<SearchResultCard key={card.id} card={card} />
				))}
			</div>
		</div>
	);
};
