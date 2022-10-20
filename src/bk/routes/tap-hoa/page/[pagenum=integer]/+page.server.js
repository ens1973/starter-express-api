/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import { api } from '$lib/api';
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';
import { perPage } from '$lib/api';

export const load = async ({ params }) => {
// export const load = async ({ params, url, locals }) => {
	// locals.userid comes from src/hooks.js
	const page = Number(params?.pagenum ?? '1');
	// const response = await api('GET', `products/shop/page/${page}`);
	// const json = await response.json();
	
	// // console.log('back ', json);

	// if (response.status === 404 || response.status === 500) {
	// 	// user hasn't created a todo list.
	// 	// start with an empty array
	// 	return {
	// 		items: [],
	// 		current_page: page,
	// 		total_page: 0
	// 	};
	// }

	// if (response.status === 200) {
	// 	return {
	// 		items: [...json?.items],
	// 		current_page: json?.current_page,
	// 		total_page: json?.total_page
	// 	};
	// }

	const response = await client.records.getList('books', page, perPage, {
	    sort: '-created',
	});

	// console.log(JSON.stringify(response));
	// const json = JSON.stringify(response);
	const data = await serializeNonPOJOs(response);
	// console.log(data);

	if (data?.code === 400 || data?.code === 403)
		throw error(data?.code, data?.message);

	return data
};
