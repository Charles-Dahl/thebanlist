import firestore from "../../../library/firebase/firestore";
import { Permission } from "../../../types/community";

interface PermissionsConfig {
	community_id: string;
	permissions: Array<Permission>;
	uid: string;
}

export default () => {
	return ({ community_id, permissions, uid }: PermissionsConfig) => {
		const updatedData = permissions.reduce(
			(updatedPermissions, permission) => {
				return {
					...updatedPermissions,
					[permission]: firestore.FieldValue.arrayUnion(uid),
				};
			},
			{}
		);

		return firestore()
			.collection("community")
			.doc(community_id)
			.update(updatedData);
	};
};
