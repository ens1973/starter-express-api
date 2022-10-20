/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/api';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);
		} catch (err) {
			const e = await serializeNonPOJOs(err);
			// console.log('Error:', e);
			return {
				error: true,
				message: e.data,
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
