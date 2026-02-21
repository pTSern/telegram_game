declare namespace pFlex {
	declare type TFunction<TArgs = any[], TReturn = any> = TArgs extends any[]
	  ? (...args: TArgs) => TReturn
	  : (...args: TArgs[]) => TReturn;

	declare type TConstructor<TArgs = any, TInstance = any, TAbstract extends boolean = false> = TAbstract extends false ? new (...args: TArgs[]) => TInstance : abstract new (...args: TArgs[]) => TInstance;
	declare interface IBinder<TArgs = any, TReturn = any> {
	    _function: TFunction<TArgs, TReturn>;
	    _priority?: number;
	    _this: any;
	    _args?: TArgs;
		_log?: string;
	}

	declare type THandler<TArgs = any[], TReturn = any, TBinder extends IBinder = IBinder<TArgs, TReturn>> = TFunction<TArgs, TReturn> | TBinder;

	declare type TKey = string | symbol | number;
	declare type TReadonlyArray<TType> = (readonly TType[] | TType[])

	declare type TPrototype<T> = { prototype: T };
	declare type TRecorder<TKey extends TKey, TValue = any> = Partial<Record<TKey, TValue>>
	declare type TExtractKeyArray<TKeys extends TKey[], TValue = any> = { [K in TKeys[number]]: TValue }

	declare type TExtractKey<TObject extends object[], TKeyof extends keyof TObject[number], TValue> = {
	    [ Key in TObject[number] as Key[TKeyof] & string ]: TValue
	}

	declare type TStaticKeys<TTarget> = {
	    [K in keyof TTarget] : TTarget[K] extends Function ? K : never
	}[keyof TTarget];

	declare type TKeyOf<TTarget, TCondition = any, TExclude extends boolean = false> = {
	    [K in keyof TTarget]:
	        TExclude extends true
	            ? (TTarget[K] extends TCondition ? never : K)
	            : (TTarget[K] extends TCondition ? K : never);
	}[keyof TTarget];

	declare type TStringRecord<TKey extends TKey[], TPartial extends boolean = false, TReturn = string> = TPartial extends true ? Partial<Record<TKey[number], string>> : Record<TKey[number], TReturn>;

	declare type TArray<TTarget, TIsReadonly extends boolean = false> = TTarget | ( TIsReadonly extends true ? readonly TTarget[] : TTarget[] );

	declare type TOption<TData, TKey extends TKeyOf<TData>> = {
	    key: TKey
	    data: TData[TKey]
	}

	declare type TArg<TName extends string, TType> = TType | { [K in TName]: TType };

	type TBuildNumericRange<
		N extends number,
	  	Result extends Array<number> = [],
	  	Current extends number = Result['length']
	> = Current extends N
	  ? [...Result, Current]
	  : TBuildNumericRange<N, [...Result, Current], Current extends number ? TAddOne<Current> : never>;

	type TAddOne<N extends number> = [
	  ...Array<N>,
	  0
	]['length'] extends infer L ? L extends number ? L : never : never;

	type TNumberToString<N extends number> = `${N}`;

	declare type TBuildStringRange<N extends number, Prefix extends string, Suffix extends string> = {
		[K in TBuildNumericRange<N>[number]]: `${Prefix}${TNumberToString<K>}${Suffix}`;
	} [TBuildNumericRange<N>[number]];

}
