import firestore from "../../../library/firebase/firestore";
import { useCommunity } from "../view";
import { Card } from "../../../types/cards";

export default () => {
	const community = useCommunity();

	return (card: Card) => {
		console.log("save card", card);
		if (community) {
			firestore()
				.collection(`community/${community.community_id}/card`)
				.doc(card.id)
				.set(card);
		}
	};
};
