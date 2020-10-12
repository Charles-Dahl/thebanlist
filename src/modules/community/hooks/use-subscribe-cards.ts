import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { Card } from "../../../types/card";

export default (community_id: string): [Array<Card>, boolean] => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState<Array<Card>>([]);

	useEffect(() => {
		console.log("sub");
		return firestore()
			.collection(`community/${community_id}/card`)
			.onSnapshot((snapshot) => {
				console.log("subscribe cards");
				const data = snapshot.docs.map((doc) => {
					const result = doc.data();
					const banCount = result.ban?.length || 0;
					const dontBanCount = result.dont_ban?.length || 0;

					return {
						name: result.name,
						id: result.id,
						image_uris: result.image_uris,
						ban: result.ban ? result.ban : [],
						dont_ban: result.dont_ban ? result.dont_ban : [],
						banned: banCount > dontBanCount,
					};
				});
				setCards(data);
				setLoading(false);
			});
	}, []);

	return [cards, loading];
};
