/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import { api } from '$lib/api';

export const load = async ({ params }) => {
// export const load = async ({ params, url, locals }) => {
	// locals.userid comes from src/hooks.js
	const page = Number(params?.pagenum ?? '1');
	const response = await api('GET', `products/shop/page/${page}`);
	const json = await response.json();
	
	// console.log('back ', json);

	if (response.status === 404 || response.status === 500) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			items: [],
			current_page: page,
			total_page: 0
		};
	}

	if (response.status === 200) {
		return {
			items: [...json?.items],
			current_page: json?.current_page,
			total_page: json?.total_page
		};
	}

	throw error(response.status);
};
