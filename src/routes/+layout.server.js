/** @type {import('./$types').LayoutServerLoad} */
import { client } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

const baseMenu = [
    {'title':'Home', 'link':'/'},
    {'title':'Tap hoa', 'link':'/shop'},
    // {'title':'Đá quý', 'link':'/da-quy'},
    // {'title':'Website', 'link':'/website'},
    // {'title':'Blog', 'link':'/blog'},
    // {'title':'Admin', 'link':'/admin'}
]
const getMenu = async (user) => {
    let menu1 = [...baseMenu]

    if ( !user?.id )
        // menu for guest
        menu1 = [
            ...menu1,
            {'title':'Login', 'link':'/login'},
            {'title':'Register', 'link':'/register'}
        ]
    
    // if ( user?.avatar >= 0 )
    //     // menu for administrator
    //     menu1 = [
    //         ...menu1,
    //         {'title':'Customer Orders', 'link':'/_/order'},
    //     ]
    
    return menu1
}
// $: (async () => menu = await getMenu())();


export const load = async () => {
    let user;
    if (client.authStore.isValid)
        user = await serializeNonPOJOs(client.authStore.model);
    const menu = await getMenu(user);
    return {
        user,
        menu
    }
};