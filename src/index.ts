import poster from "./manager/poster";

export default {
	fetch(request, env): Promise<Response> {
		switch(request.method) {
			case 'POST': {
				return poster(request, env);
			}
		}

		return Promise.resolve(new Response('Not Found', { status: 404 }));
	},
} satisfies ExportedHandler<Env>;

