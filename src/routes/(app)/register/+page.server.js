/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

export const load = async () => {
	if (client.authStore.isValid)
		throw redirect(303, '/');
};

export const actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const newUser = await client.users.create(data);

			// MUST BE auth before update profiles
			const { token, user } = await client.users.authViaEmail(data.email, data.password);

			const updatedProfile = await client.records.update('profiles', user.profile.id, {
				name: data.name
			});

			client.authStore.clear();
		} catch (err) {
			const e = await serializeNonPOJOs(err);
			// console.log('Error:', e);
			return {
				error: true,
				message: e.data
			};
		}

		throw redirect(303, '/login');
	}
};
