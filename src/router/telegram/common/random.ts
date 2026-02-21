import NSTelegram from "../interfaces";

const _: NSTelegram.TCmdHandler = async (_msg, _env, _first, _second, _is_int, _reapeat) => {
	const first = Number(_first || "0");
	const second = Number(_second || '99');
	const is_int = Number(_is_int || "1");
	const repeat = Math.abs(Number(_reapeat || "1")) || 1;

	const _res = [];
	if(is_int) {
		for(let i = 0; i < repeat; i++) {
			_res.push(Math.floor(Math.random() * (second - first + 1)) + first);
		}
	} else {
		for(let i = 0; i < repeat; i++) {
			_res.push((Math.random() * (second - first)) + first);
		}

	}
	return `Random: ${_res.join(', ')}`;
}

export default _;
