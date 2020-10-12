import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { Community } from "../../../types/community";

export default (community_id: string) => {
	const [community, setCommunity] = useState<Community | null>(null);

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
					});
				}
			});
	}, [community_id]);

	return community;
};
