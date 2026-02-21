import send from "../../manager/send";
import financer from "./financer";
import NSTelegram from "./interfaces";

const actions = [ 'financer' ] as const;
type _TAction = typeof actions[number];
const acttor: Record<_TAction, NSTelegram.TActionHandler> = {
    financer
}

export default function(_action: string, _json: NSTelegram.IUpdate, env: Env) {
	const _acttor = acttor[_action as _TAction];
	console.log(`[Telegram] Log: \n\t Receive Action: ${_action}, \n\t Text: ${_json.message.text}`);

	return new Promise<Response>( async ( _rs, _rj ) => {
		let _stop = false;
		const _timer = setTimeout(() => {
			_stop = true;
			const _res = send(env.PTS_FINANCER_BOT_TOKEN, _json.message.chat.id, "[TELEGRAM] Error >> Timeout exceeded. Please try again later.")
			_rs(_res);
		}, 30_000);

		const _text = _acttor ? await _acttor(_json, env) : `[TELEGRAM] Error >> Unknown action: ${_action}`;
		if ( !_stop ) {
			clearTimeout(_timer);
			const _res = send(env.PTS_FINANCER_BOT_TOKEN, _json.message.chat.id, _text)
			_rs(_res);
		}
	} )
}

