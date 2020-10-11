import auth from "../../library/firebase/auth";
import React, {
	createContext,
	ReactNode,
	useState,
	useContext,
	useEffect,
} from "react";
import { User } from "firebase";

type UserProviderProps = {
	children: ReactNode;
};

const UserContext = createContext<User | null>(null);
export const useUser = () => useContext(UserContext);

export default ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		return auth().onAuthStateChanged((user) => {
			setUser(user || null);
		});
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
