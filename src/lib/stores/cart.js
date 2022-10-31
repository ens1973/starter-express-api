import { writable } from 'svelte/store';
import { client } from '$lib/api';
import { perPage } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

import * as notifier from '$lib/notifications/notifier.js'

// cart = writable({
//     'customer_name': '',
//     'customer_phone': '',
//     'customer_address': '',
//     'receiver_name': '',
//     'receiver_phone': '',
//     'receiver_address': '',
//     'items': [],
//     'note': '',
//     'total_quantity':0,
//     'type': 1, // 0 to 4
//     'status': 1 // 0 to 4
// });

export const cart = writable({
    'customer_name': '',
    'customer_phone': '',
    'customer_address': '',
    'receiver_name': '',
    'receiver_phone': '',
    'receiver_address': '',
    'items': [],
    'note': '',
    'total_quantity':0,
    'type': 1, // 0 to 4
    'status': 1 // 0 to 4
});


export const addToCart = (item) => {
    cart.update((c) => {
        c.total_quantity +=1
        const founded = c.items.findIndex((i)=>{
            if (i.id === item.id)
                return i
            return
        })
        if (founded >= 0){
            c.items[founded].quantity += 1
            return c
        }
        c.items = [item, ...c.items]
        return c
    })
    notifier.success("Done!", {'accent': 1, 'persist': 1 });
    // notifier.success("Done!");
}

export const removeFromCart = (item) => {
    cart.update(c => {
        c.total_quantity -=1
        c.items = c.items.filter((i)=>{
            if (i.id === item.id){
                if (i.quantity === 1)
                    return
                i.quantity -= 1
                return i
            }
            return i
        })
        return c
    })

    notifier.success("Done!");
}


export const placeOrder = async () => {

    const page = 1;

    const response = await client.records.getList('telegram_bot', page, perPage);

    // const response = await client.records.getList('telegram_bot', page, perPage, {
    //     filter: 'name = "orderbot"',
    // });

    const data = await serializeNonPOJOs(response);
    console.log(data);
    // if (data.totalItems !== 1) {
    //     notifier.danger("Not found!");
    //     return
    // }

    // const sendorder = await fetch(`https://api.telegram.org/bot${data.items[0].bot_key}/sendMessage`,{
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     body: JSON.stringify({
    //         'chat_id': data.items[0].group_id,
    //         'text': 'Trời ơi tin được không'
    //     })
    // })
    // const jsondata = await sendorder.json()
    // // console.log(jsondata);

    // cart.set({
    //     'items': [],
    //     'total_quantity':0
    // })
    
    notifier.success("Done!");
}