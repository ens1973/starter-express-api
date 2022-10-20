import { client } from '$lib/api';
// import { serializeNonPOJOs } from '$lib/api';
// import { user } from '$lib/stores/user';

export const handle = async ({ event, resolve }) => {
	// client = client;
	client.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// if (client.authStore.isValid) {
	// 	// event.locals.user = client.authStore.model;
	// 	let currentUser = await serializeNonPOJOs(client.authStore.model);
	// 	// console.log(currentUser);
	// 	user.update(u => u = {...currentUser});
	// 	// console.log($user);
	// }

	const response = await resolve(event);

	// TODO: secure before deployment
	response.headers.set('set-cookie', client.authStore.exportToCookie({ secure: false }));

	return response;
};
