/** @type {import('./$types').PageServerLoad} */
import { error } from '@sveltejs/kit';
import { client } from '$lib/api';
import { perPage } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

export const load = async () => {

    const page = 1;

    const response = await client.records.getList('customer_order', page, perPage, {
        sort: '-created',
    });

    const data = await serializeNonPOJOs(response);
    // console.log(data);

    if (data?.code === 400 || data?.code === 403)
        throw error(data?.code, data?.message);

    return data
};