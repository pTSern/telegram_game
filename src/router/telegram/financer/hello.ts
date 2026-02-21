import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (update, env) => {
	update;

	const _current = new Date().toISOString();
	const _last = await env.get('last_hello');
	await env.put('last_hello', _current);
	return `OK SIR \nLast: ${_last}\nCurrent: ${_current}`;
}

export default _;
