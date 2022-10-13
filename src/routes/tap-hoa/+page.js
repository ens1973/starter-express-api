// /** @type {import('./$types').PageLoad} */
// import { error } from '@sveltejs/kit';
// import { api } from '$lib/api';
// import { client } from '$lib/api';

// export const load = async ( ) => {
//   	const resultList = await client.records.getList('books', 1, 50, {
// 	    sort: '-created',
// 	});

// 	console.log('##################################');
// 	console.log(resultList);
// 	console.log('##################################');
// 	console.log(resultList.items);
// 	// const data = await resultList.json();

// 	return {
// 		resultList
// 	};

// 	throw error(response.status);
// }