import firestore from "../../../library/firebase/firestore";
import { Community } from "../../../types/community";

export default () => {
	return (community: Community) => {
		return firestore()
			.collection("community")
			.doc(community.id)
			.set(community);
	};
};
