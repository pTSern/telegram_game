
import I from './interfaces'

class _Schema<S extends Record<string, any>> {
	constructor(protected _schema: I.Model.IDefinition<S>) {
		this._schema = _schema;
	}

	get<K extends keyof S>(key: K): I.Model.IField<S[K]> {
		return this._schema[key];
	}

}

interface _Schema<S extends Record<string, any>> extends I.Model.IField<S> {}

interface IX {
	id: number;

}

const _x = new _Schema({
	id: 	{ type: Number, required: true }
})

_x.get('id')
