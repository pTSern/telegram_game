
export default function(token: string, chat_id: number, text: string) {
	const _url = `https://api.telegram.org/bot${token}/sendMessage`;

	return fetch(_url, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ chat_id, text })
	});
}
