import { writable } from 'svelte/store';

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