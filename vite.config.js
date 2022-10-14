import { sveltekit } from '@sveltejs/kit/vite';
// const pkg = require('./package.json');
const config = {
	plugins: [sveltekit()],
	// build: {
	// 	target: ['es2020'],
	// },
	server: {
        watch: {
            // bind volumes don't get fs events
            // so we need to poll now.
            usePolling: true,
        },
		// hmr: {
		// 	protocol: 'ws',
		// 	host: '0.0.0.0',
		// 	// port: 3300,
		// 	clientPort: 3300,
		// },
	}
};

export default config;
