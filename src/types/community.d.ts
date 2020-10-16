export type Community = {
	id: string;
	name: string;
	admin: Array<string>;
	voter: Array<string>;
	add_cards: Array<string>;
	isPublic: boolean;
};

export enum Permission {
	Admin = "admin",
	Voter = "voter",
	AddCards = "add_cards",
}
