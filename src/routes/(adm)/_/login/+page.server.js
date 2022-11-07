/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

export const load = async () => {
	if (client.authStore.isValid)
		throw redirect(303, '/_/');
};

export const actions = {
	login: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		// console.log(data)
		try {
			const { token, user } = await client.admins.authViaEmail(data.email, data.password);
		} catch (err) {
			const e = await serializeNonPOJOs(err);
			// console.log('Error:', e);
			return {
				error: true,
				message: e.data,
				email: data.email
			};
		}
		throw redirect(303, '/_/');
	}
};
