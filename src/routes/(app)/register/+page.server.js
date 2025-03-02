/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';
import { z } from 'zod';

export const load = async () => {
	if (client.authStore.isValid)
		throw redirect(303, '/');
};

const registerSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required' })
			.min(2, { message: 'Name must be great than 1 characters' })
			.max(64, { message: 'Name must be less than 64 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.min(5, { message: 'Email is required' })
			.max(64, { message: 'Email must be less than 64 characters' })
			.email({ message: 'Email must be a valid email address' }),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		// terms: z.enum(['on'], { required_error: 'You must accept the terms and conditions' })
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Password and Confirm Password must match',
				path: ['passwordConfirm']
			});
		}
	});


export const actions = {
	register: async ({ request }) => {

		const formObj = Object.fromEntries(await request.formData());
		// console.log('Form Data:', formObj);
		
		try {
			const result = registerSchema.parse(formObj);
			// console.log('SUCCESS');
			// console.log('SUCCESS: ', result);
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			const { password, passwordConfirm, ...rest } = formObj;
			return {
				data: rest,
				// errors: await serializeNonPOJOs(err),
				errors
			};
		}


		try {
			const newUser = await client.users.create(formObj);

			// MUST BE auth before update profiles
			const { token, user } = await client.users.authViaEmail(formObj.email, formObj.password);

			const updatedProfile = await client.records.update('profiles', user.profile.id, {
				name: formObj.name
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
