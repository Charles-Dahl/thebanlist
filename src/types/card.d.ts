enum Legality {
	Banned = "banned",
	Legal = "legal",
	NotLegal = "not_legal",
	Restricted = "restricted",
}

type Card = {
	id: string;
	ban: Array<string>;
	dont_ban: Array<string>;
	image_uris: {
		normal: string;
		small: string;
	};
	legalities: {
		standard?: Legality;
		future?: Legality;
		historic?: Legality;
		gladiator?: Legality;
		pioneer?: Legality;
		modern?: Legality;
		legacy?: Legality;
		pauper?: Legality;
		vintage?: Legality;
		penny?: Legality;
		commander?: Legality;
		brawl?: Legality;
		duel?: Legality;
		oldschool?: Legality;
		premodern?: Legality;
	};
	mana_cost?: string;
	name: string;
	oracle_text?: string;
	type_line: string;
};

export const Card;
