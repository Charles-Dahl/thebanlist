import React, { FormEvent, useState } from "react";

import Button from "../../components/button";
import { search } from "../../config/scryfall";
import { Card } from "../../types/cards";
import SearchResultCard from "./search-result-card";

export default () => {
	const [searchTerms, setSearchTerms] = useState("");
	const [cardResults, setCardResults] = useState<Array<Card>>([]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		search(searchTerms).then((results) => setCardResults(results.data));
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
