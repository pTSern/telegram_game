
import { EnvHandler } from "../../../helper";
import ITelegram from "./../interfaces";
import bet from "./bet";

const commands = [ 'bet' ] as const;
type _TCommand = typeof commands[number];
const commander: Record<_TCommand, ITelegram.TCmdHandler> = {
	bet
}

export default function(_json: ITelegram.IUpdate, env: ITelegram.ISmartEnv) {
	if(_json.message && _json.message.text) {
		const _text = _json.message.text;
		const _context = _text.slice(1).split(' ');

		const _command = _context[0] as _TCommand;
		const _args = _context.slice(1);
		console.log(`[FINANCER] Log: \n\tCommand: ${_command} \n\tArgs: ${_args.join(', ')}`);

		const _commander = commander[_command];

		return _commander ? _commander({ update_id: _json.update_id, message: _json.message }, env, ..._args) : Promise.resolve(`[FINANCER] Error >> Unknown command: ${_command}`);
	}
}

