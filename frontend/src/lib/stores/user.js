import { writable } from 'svelte/store';

import * as notifier from '$lib/notifications/notifier.js'

export const user = writable({"access_token":"", "refresh_token":""});

const hostProd = "";
const hostDev = "http://127.0.0.1:5000";
let api = process.env.NODE_ENV === 'production' ? `${hostProd}/api/user` : `${hostDev}/api/user`


export async function getToken() {
    let currentUser;
    const unsubscribe = user.subscribe(value => {
        currentUser = value;
    });
    // console.log(currentUser)
    // return currentUser
    return currentUser.access_token
}


export async function getRefreshToken() {
    let token;
    const unsubscribe = user.subscribe(value => {
        token = value.refresh_token;
    });
    // console.log(currentUser)
    // const token = currentUser.refresh_token

    const header = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer  ${token}`
    }

    const data = await fetch(`${api}/re-login`,{
        method: "POST",
        headers: header,
        body: JSON.stringify({
            refresh_token: token
        })
    })
    const jsondata = await data.json()
    
    // console.log(data.ok)
    if (data.ok) {
        jsondata.msg = "";
        user.update(u => u = jsondata);
        // console.log(jsondata)
    } else {
        // console.log(jsondata.msg)
    }
}
