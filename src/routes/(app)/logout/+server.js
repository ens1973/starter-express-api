/** @type {import('./$types').RequestHandler} */
import { redirect } from '@sveltejs/kit';
import { client } from '$lib/api';
import { user } from '$lib/stores/user';

export const POST = async () => {
	client.authStore.clear();
	user.set({});

	throw redirect(303, '/');
};
