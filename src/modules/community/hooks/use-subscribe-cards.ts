import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { Card } from "../../../types/cards";

export default (community_id: string): [Array<Card>, boolean] => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState<Array<Card>>([]);

	useEffect(() => {
		return firestore()
			.collection(`community/${community_id}/card`)
			.onSnapshot((snapshot) => {
				console.log("subscribe cards");
				const data = snapshot.docs.map((doc) => {
					const result = doc.data();
					return {
						name: result.name,
						id: result.id,
						image_uris: result.image_uris,
						users: result.users ? result.users : [],
					};
				});
				setCards(data);
				setLoading(false);
			});
	}, []);

	return [cards, loading];
};
