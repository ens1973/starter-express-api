const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-102214ac.js","imports":["_app/immutable/start-102214ac.js","_app/immutable/chunks/index-3a3eeba4.js","_app/immutable/chunks/singletons-7327c33f.js","_app/immutable/chunks/index-7a1d0fb0.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-e1dbeb87.js'),
			() => import('./chunks/1-c5d5ac2a.js'),
			() => import('./chunks/2-70db19f9.js'),
			() => import('./chunks/3-7f08ce63.js'),
			() => import('./chunks/4-0f69b6e7.js'),
			() => import('./chunks/5-66c92e19.js')
		],
		routes: [
			{
				id: "sverdle",
				pattern: /^\/sverdle\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
