import { EnvHandler } from "../../helper";
import send from "../../manager/send";
import blackjack from "./blackjack";
import common from "./common";
import NSTelegram from "./interfaces";

const actions = [ 'common', 'blackjack' ] as const;
type _TAction = typeof actions[number];
const acttor: Record<_TAction, NSTelegram.TActionHandler> = {
    common,
	blackjack
}

export default function(_action: string, _json: NSTelegram.IUpdate, env: Env) {
	const _acttor = acttor[_action as _TAction];

	return new Promise<Response>( async ( _rs, _rj ) => {
		let _stop = false;
		const _obj = env.PTS_TOKEN;
		const _token = _obj[_action]

		const _handler = EnvHandler.create(env.PTS_KV, _action);
		//console.log(`[Telegram] Log: \n\t Receive Action: ${_action}, \n\t Text: ${_json.message.text}, \n\t Token: ${_token}, \n\t Chat ID: ${_json.message.chat.id}, \n\t OBJ: ${JSON.stringify(env.PTS_TOKEN)}`);

		const _timer = setTimeout(() => {
			_stop = true;
			const _res = send(_token, _json.message.chat.id, "[TELEGRAM] Error >> Timeout exceeded. Please try again later.")
			_rs(_res);
		}, 30_000);

		const _text = _acttor ? await _acttor(_json, _handler) : `[TELEGRAM] Error >> Unknown action: ${_action}`;
		if ( !_stop ) {
			clearTimeout(_timer);
			const _res = send(_token, _json.message.chat.id, _text);
			_rs(_res);
		}
	} )
}

