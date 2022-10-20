/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/api';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const newUser = await locals.pb.users.create(data);

			// MUST BE auth before update profiles
			const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);

			const updatedProfile = await locals.pb.records.update('profiles', user.profile.id, {
				name: data.name
			});

			locals.pb.authStore.clear();
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
