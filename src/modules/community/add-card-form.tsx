import React, { FormEvent, useState } from "react";

import Button from "../../components/button";
import { search } from "../../config/scryfall";
import { Card } from "../../types/cards";
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

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		search(searchTerms).then((results) => setCardResults(results.data.map(createCard)));
	};

	const handleChangeSearchTerms = (event: FormEvent<HTMLInputElement>) => {
		setSearchTerms(event.currentTarget.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="search-terms">
					Search
					<input
						value={searchTerms}
						name="search-terms"
						type="text"
						onChange={handleChangeSearchTerms}
					/>
				</label>
				<Button type="submit">Search</Button>
			</form>
			<div>
				{cardResults.map((card) => (
					<SearchResultCard key={card.id} card={card} />
				))}
			</div>
		</div>
	);
};
