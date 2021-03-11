import firestore from "../../../library/firebase/firestore";
import { useCommunity } from "../view-community";
import { Card } from "../../../types/card";

export default () => {
	const community = useCommunity();

	return (card: Card) => {
		console.log("save card", card);
		if (community) {
			firestore()
				.collection(`community/${community.id}/card`)
				.doc(card.id)
				.set(card);
		}
	};
};
