/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

// import { variables } from './variables';
// const base = variables.VITE_API_URL;
// const base = 'https://api.svelte.dev';
// import { API_URL as base } from '$env/static/private';
// const base = process.env.API_URL;
const base = '';

export function api(method, resource, data) {
	// console.log(`${base}/${resource}`);
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}

import PocketBase from 'pocketbase'

export const client = new PocketBase('https://pb.anhcafe.com');
export const perPage = 10;

export const serializeNonPOJOs = async (nonPOJOs) => {
    return JSON.parse(JSON.stringify(nonPOJOs));
}