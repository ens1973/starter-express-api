import { writable } from 'svelte/store';
import { api } from './hostname';

export const dsbc_data = writable([]);
export const dsbc_pagination = writable([]);

export const fetch_data = async () => {
    const data = await fetch(`${api}/bccp/page/1`,{
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const jsondata = await data.json();

    if (data.ok) {
        dsbc_data.set(jsondata.data);
        dsbc_pagination.set(jsondata.pagination);
    } else {
        console.log(jsondata);
    }
    console.log(jsondata);
}

fetch_data();