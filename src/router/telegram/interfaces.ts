
export namespace NSTelegram {
	export type TCmdHandler = pFlex.TFunction<[IUpdate, KVNamespace<string>, ...string[]], Promise<string>>;
	export type TActionHandler = pFlex.TFunction<[IUpdate, Env], Promise<string>>;

	export interface IUser {
		id: number;
		is_bot: boolean;
		first_name: string;
		last_name?: string;
		username?: string;
		language_code?: string;
	}

	export type TChatType = "private" | "group" | "supergroup" | "channel";

	export interface IChat {
		id: number;
		first_name?: string;
		last_name?: string;
		username?: string;
		type: TChatType;
	}

	export interface IMessage {
		message_id: number;
		from: IUser;
		chat: IChat;
		date: number;
		text: string;
		entities: IEntity[];
	}

	export interface IEntity {
		offset: number;
		length: number;
		type: string;
	}

	export interface IUpdate {
		update_id: string;
		message: IMessage;
	}
}

export default NSTelegram;
