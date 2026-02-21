import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (_update, _env) => {
	const _now = Date.now();
	console.log("[Ping] Log: Client Date >> ", _update.message.date);
	return `Pong ${_now - _update.message.date * 1000} ms`;
}

export default _;

