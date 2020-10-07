import callApi from "../library/call-api";

const searchApi = "https://api.scryfall.com/cards/search";

export const search = (terms: string) => {
	const url = `${searchApi}?q=${encodeURI(terms)}`;
	return callApi(url);
};
