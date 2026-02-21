import telegram from "../router/telegram";

export default async function(request: Request, env: Env) {
	try {
    	const _url = new URL(request.url);
		const _json = await request.json() as any;
		const _paths = _url.pathname.split("/");
		console.log("\n\n[POSTER] Log: \n\tpathname: ", _paths);

		const _router = _paths[1];
		const _action = _paths[2];

		switch(_router) {
			case "telegram": {
				return telegram(_action, _json, env);
			}
			default: {
				return new Response(`No Router Found ${_router}`, { status: 404 });
			}
		}
	} catch (err) {
		return new Response(`Error: ${err}`, { status: 500 });
	}


}
