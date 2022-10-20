/** @type {import('./$types').LayoutServerLoad} */
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

export const load = async () => {
    if (client.authStore.isValid) {
        let user = await serializeNonPOJOs(client.authStore.model);
        // console.log(user);
        return user
    }
};