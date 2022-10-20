/** @type {import('./$types').LayoutServerLoad} */

import { serializeNonPOJOs } from '$lib/api';
import { user } from '$lib/stores/user';

export const load = async ({ locals }) => {
    if (locals.user && locals.user.profile) {
        let profile = await serializeNonPOJOs(locals.user.profile);
        user.update(u => u.profile = {...profile});
        return {
            profile
        };
    }
};