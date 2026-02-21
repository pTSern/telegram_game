import hello from "./hello";
import ITelegram from "./../interfaces";
import ping from "./ping";
import random from "./random";

const commands = [ 'hello', 'ping', 'random' ] as const;
type _TCommand = typeof commands[number];
const commander: Record<_TCommand, ITelegram.TCmdHandler> = {
    hello, ping, random,
}

export default function(_json: ITelegram.IUpdate, env: Env) {
	if(_json.message && _json.message.text) {
		const _text = _json.message.text;
		const _context = _text.slice(1).split(' ');

		const _command = _context[0] as _TCommand;
		const _args = _context.slice(1);
		console.log(`[FINANCER] Log: \n\tCommand: ${_command} \n\tArgs: ${_args.join(', ')}`);

		const _commander = commander[_command];
		return _commander ? _commander(env.PTS_FINANCER_BOT_TOKEN, _json, env.PTS_FINANCER_BOT_KV, ..._args) : Promise.resolve(`[FINANCER] Error >> Unknown command: ${_command}`);
	}
}

