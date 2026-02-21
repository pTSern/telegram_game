import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (_update, _env) => {
	const _now = Date.now();
	console.log("[Ping] Log: Client Date >> ", _update.message.date);

	const _current = new Date().toISOString();
	const _last = await _env.get('last_hello');
	await _env.put('last_hello', _current);

	return `Pong ${_now - _update.message.date * 1000} ms | Last Hello: ${_last} | Current Hello: ${_current}`;
}

export default _;

