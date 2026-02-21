
export namespace NSModel {
	export namespace Model {
		export type TConstructor<T> =
			T extends string ? StringConstructor :
			T extends number ? NumberConstructor :
			T extends boolean ? BooleanConstructor :
			T extends Date ? typeof Date :
			pFlex.TConstructor<any, T>;

		export interface IField<T> {
			type: TConstructor<T>;
			required?: boolean;
			default?: T | pFlex.TFunction<void, T>;
		}

		export type IDefinition<T> = {
			[P in keyof T]: IField<T[P]>;
		}

	}


}
export default NSModel;
