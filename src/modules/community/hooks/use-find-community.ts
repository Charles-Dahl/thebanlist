import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { CommunityType } from "../types";

export default (community_id: string) => {
	const [community, setCommunity] = useState<CommunityType | null>(null);

	useEffect(() => {
		firestore()
			.collection("community")
			.doc(community_id)
			.get()
			.then((snapshot) => {
				const data = snapshot.data();
				if (data) {
					setCommunity({ name: data.name, community_id });
				}
			});
	}, [community_id]);

	return community;
};
