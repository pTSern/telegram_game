import NSTelegram from "../../router/telegram/interfaces";

var _ = 0;
const _pool: Record<string, EnvHandler> = {};

export class EnvHandler implements NSTelegram.ISmartEnv {
	protected _env: KVNamespace<string> = null;
	protected _key: string = ""

    get(key: string): Promise<string> {
		return this._env.get(`${this._key}::${key}`);
    }

    set(key: string, value: string): Promise<void> {
		return this._env.put(`${this._key}::${key}`, value);
    }

	static create(env: KVNamespace<string>, key: string): EnvHandler {
		const _out = _pool[key];
		_++;
		console.log(`EnvHandler create: ${key} (${_})`);

		if (_out) {
			_out._env = env;
			return _out;
		}

		const handler = new EnvHandler();
		_pool[key] = handler;

		handler._env = env;
		handler._key = key;

		return handler;
	}
}

