import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { Community } from "../../../types/community";

export default (community_id: string): [Community | null, boolean] => {
	const [community, setCommunity] = useState<Community | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		firestore()
			.collection("community")
			.doc(community_id)
			.get()
			.then((snapshot) => {
				const data = snapshot.data();
				if (data) {
					setCommunity({
						name: data.name,
						id: data.id,
						admin: data.admin,
						isPublic: data.isPublic,
						voter: data.voter,
						add_cards: data.add_cards,
					});
					setLoading(false);
				}
			});
	}, [community_id]);

	return [community, loading];
};
