import { useEffect, useState } from "react";

import firestore from "../../../library/firebase/firestore";
import { Community } from "../../../types/community";

interface Params {
	limit?: number;
	orderBy?: keyof Community;
	where: Array<[string | firestore.FieldPath, firestore.WhereFilterOp, any]>;
}

export default ({
	limit = 30,
	orderBy = "name",
	where = [],
}: Params): [Array<Community>, boolean, () => void] => {
	const [communities, setCommunities] = useState<Array<Community>>([]);
	const [loading, setLoading] = useState(true);
	const [
		lastDocument,
		setLastDocument,
	] = useState<firestore.QueryDocumentSnapshot<
		firestore.DocumentData
	> | null>(null);

	const saveLastDocument = (
		docs: Array<firestore.QueryDocumentSnapshot<firestore.DocumentData>>
	) => {
		setLastDocument(docs[docs.length - 1]);
	};

	const getCommunities = () => {
		if (!loading) {
			setLoading(true);
		}
		let query: firestore.Query<firestore.DocumentData> = firestore()
			.collection("community")
			.limit(limit)
			.orderBy(orderBy);
		where.forEach((condition) => (query = query.where(...condition)));
		if (lastDocument) {
			query = query.startAfter(lastDocument);
		}
		query.get().then(({ docs }) => {
			const communitiesData = docs.map(
				(doc): Community => {
					const {
						name,
						id,
						admin,
						isPublic,
						voter,
						add_cards,
					} = doc.data();
					return { name, id, admin, isPublic, voter, add_cards };
				}
			);
			saveLastDocument(docs);
			setCommunities(communitiesData);
			setLoading(false);
		});
	};

	useEffect(() => {
		getCommunities();
	}, []);

	return [communities, loading, getCommunities];
};
