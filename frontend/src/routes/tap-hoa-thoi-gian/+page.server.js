/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load = async ( ) => {
// export const load = async ({ url, locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api('GET', 'products/shop/page/1');
	const json = await response.json();
	
	// console.log('back ', json);

	if (response.status === 404 || response.status === 500) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			items: [],
			current_page: 1,
			total_page: 0
		};
	}

	if (response.status === 200) {
		return {
			items: [...json?.items],
			current_page: 1,
			total_page: json?.total_page
		};
	}

	throw error(response.status);
};

// export function GET({ url }) {

// 	if (isNaN(page) || page < 1) {
// 		throw error(400, 'page must be numbers, and must be great than 0');
// 	}

// 	return new Response(String(page));
// }

// export const actions = {
// 	getFromPage: async ({ request, locals }) => {
// 		// console.log(request);
// 		const form = await request.formData();
// 		const page = * @type {string}  (form.get('page'));
// 		// await api('POST', `products/${locals.userid}`, {
// 		// 	text: form.get('text')
// 		// });
// 		console.log(page);
// 	},
// 	editTodo: () => {}
// };

// export const POST = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('POST', `products/${locals.userid}`, {
// 		text: form.get('text')
// 	});
// };

// export const PATCH = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('PATCH', `products/${locals.userid}/${form.get('uid')}`, {
// 		text: form.has('text') ? form.get('text') : undefined,
// 		done: form.has('done') ? !!form.get('done') : undefined
// 	});
// };

// export const DELETE = async ({ request, locals }) => {
// 	const form = await request.formData();

// 	await api('DELETE', `products/${locals.userid}/${form.get('uid')}`);
// };
