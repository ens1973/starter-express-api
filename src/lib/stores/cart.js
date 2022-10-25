import { writable } from 'svelte/store';
import { client } from '$lib/api';
import { perPage } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';

import * as notifier from '$lib/notifications/notifier.js'

export const cart = writable({
    'items': [],
    'totalQuantity':0
});


export const addToCart = (item) => {
    cart.update((c) => {
        c.totalQuantity +=1
        const found = c.items.filter((i)=>{
            if (i.id === item.id)
                return i
            return
        })
        if (found.length > 0){
            const addQuantity = c.items.filter((i)=>{
                if (i.id === item.id)
                    i.quantity += 1
                return i
            })
            c.items = [...addQuantity]
            return c
        }
        c.items = [item, ...c.items]
        return c
    })
    // notifier.success("Done!", {'accent': 1, 'persist': 1 });
    notifier.success("Done!");
}

export const removeFromCart = (item) => {
    cart.update(c => {
        c.totalQuantity -=1
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

    const response = await client.records.getList('telegram_bot', page, perPage, {
        filter: 'name = "orderbot"',
    });

    const data = await serializeNonPOJOs(response);
    if (data.totalItems !== 1) {
        notifier.danger("Not found!");
        return
    }

    const sendorder = await fetch(`https://api.telegram.org/bot${data.items[0].bot_key}/sendMessage`,{
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            'chat_id': data.items[0].group_id,
            'text': 'Trời ơi tin được không'
        })
    })
    const jsondata = await sendorder.json()
    // console.log(jsondata);

    cart.set({
        'items': [],
        'totalQuantity':0
    })
    
    notifier.success("Done!");
}