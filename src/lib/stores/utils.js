// import { writable } from 'svelte/store'

// const notification = writable()

import dayjs from 'dayjs';
import { user } from "./user"
import { getToken } from "./user"
import { getRefreshToken } from "./user"
import { loading } from "./loading";

// import { page } from '$app/stores';
// export const api = process.env.NODE_ENV === 'production' ? `${hostProd}/api` : `${hostDev}/api`;



export function getApiRoute(route="") {
    const hostProd = "";
    // console.log(`${$page.url}`)
    // const hostProd = `${$page.url}`;
    const hostDev = "http://127.0.0.1:5000";
    const api = process.env.NODE_ENV === 'production' ? `${hostProd}/api/${route}` : `${hostDev}/api/${route}`;
    // console.log(api)
    return api
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function mapObj(obj, callback) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        result[key] = callback.call(obj, obj[key], key, obj);
    });
    return result;
}


export async function createObjForInput(bareBone, data) {
    
    let obj = await mapObj(bareBone, (value, key) => {
        return {
            title : bareBone[key],
            value : data[key]
        }
    });

    // console.log(obj)
    return obj

}

export async function createObjForDatabase(data) {
    
    let obj = await mapObj(data, (value, key) => {
        return data[key].value
    });

    // console.log(obj)
    return obj

}

export async function mapObjForDetail(bareBone, data) {
    let mapData = {};
    Object.keys(bareBone).map((key) => {
        mapData[key] = {...bareBone[key]};
        mapData[key].value = data[key];
        if (bareBone[key].type === "date")
            mapData[key].value = dayjs(data[key]).format("YYYY-MM-DD");
        // if (bareBone[key].type === "datetime")
        //     mapData[key].value = dayjs(data[key]).format("YYYY-MM-DD HH:mm:ss");
        if (bareBone[key].type === "select")
            mapData[key].value = bareBone[key].options[0];
    });
    // console.log(mapData);
    return mapData
}

export async function mapObjToSave(data) {
    let mapData = {};
    Object.keys(data).map((key) => {
        if (data[key].options) {
            mapData[key] = data[key].value.value;
        } else {
            mapData[key] = data[key].value;
            if (data[key].type === "date")
                mapData[key] = dayjs(`${data[key].value}T00:00:00.000Z`).toDate();
            // if (data[key].type === "datetime")
            //     mapData[key] = dayjs(data[key].value).toDate();
        }
    });
    // console.log(mapData);
    return mapData
}

export async function mapObjToShow(bareBone, data) {
    let mapData = {};
    Object.keys(bareBone).map((key) => {
        mapData[key] = {...bareBone[key]};
        mapData[key].value = data[key];
        if (bareBone[key].type === "date")
            mapData[key].value = dayjs(data[key]).format("YYYY-MM-DD");
        // if (bareBone[key].type === "datetime")
        //     mapData[key].value = dayjs(data[key]).format("YYYY-MM-DD HH:mm:ss");
        if (bareBone[key].type === "select")
            mapData[key].value = bareBone[key].options[0];
    });
    // console.log(mapData);
    return mapData
}

export async function mapObjInfo(bareBone, data) {
    let mapData = {};
    Object.keys(bareBone).map((key) => {
        mapData[key] = {};
        mapData[key].type = bareBone[key].type;
        mapData[key].title = bareBone[key].title;
        mapData[key].value = data[key];
    });
    // console.log(mapData);
    return mapData
}

export async function updateValue(obj, key, value) {
    obj[key].value = value;
    // console.log(obj[key]);
}

export const range = (size, start = 1, step = 1) => {
    if (start < 1){
        start = 1
    }
    return [...Array(size).keys()].map(i => (i + start) * step);
}



export function createDownload(file, filename, blank=false) {
    const url = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    if (blank) { link.target = '_blank_'; };
    link.click();
    window.URL.revokeObjectURL(url);
}



async function getHeader() {
    let token = await getToken()
    // if (!token) return
    return {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer  ${token}`
    }
}

export async function fetchData(link, input_method = "GET", input_data) {
    loading.update(load => load = true);
    let data;
    let header = await getHeader();

    if (!link || !input_method){
    // if (!link || !input_method || !header)
        loading.update(load => load = false);
        return}

    if (input_method === "DELETE") {
        data = await fetch(link,{
            method: input_method,
            headers: header
        })
    } else if (input_method === "POST" || input_method === "PUT") {
        if (!input_data){
            loading.update(load => load = false);
            return}
        data = await fetch(link,{
            method: input_method,
            headers: header,
            body: JSON.stringify(input_data)
        })
    } else {
        data = await fetch(link,{
            method: "GET",
            headers: header
        })
    }
    if (data.status == 401) {
        await getRefreshToken()
        header = await getHeader();
        if (input_method === "DELETE") {
            data = await fetch(link,{
                method: input_method,
                headers: header
            })
        } else if (input_method === "POST" || input_method === "PUT") {
            if (!input_data){
                loading.update(load => load = false);
                return }
            data = await fetch(link,{
                method: input_method,
                headers: header,
                body: JSON.stringify(input_data)
            })
        } else {
            data = await fetch(link,{
                method: "GET",
                headers: header
            })
        }
    }
    // console.log(data)
    await sleep(100);
    loading.update(load => load = false);
    return await data
}

export async function fetchForm(link, formData, input_method) {
    loading.update(load => load = true);
    let jwt = await getToken();

    // console.log(link, formData, input_method, jwt)
    if (!link || !formData || !input_method || jwt === ""){
        loading.update(load => load = false);
        console.log("return")
        return}
    let data = await fetch(`${link}`,{
        method: input_method,
        headers: {
            // "Content-Type": "multipart/form-data",
            "Authorization": `Bearer  ${jwt}`
            // Remove "Content-type" from "headers" for POST file 
        },
        body: formData
    })
    if (data.status == 401) {
        await getRefreshToken()
        jwt = await getToken();

        data = await fetch(`${link}`,{
            method: input_method,
            headers: {
                // "Content-Type": "multipart/form-data",
                "Authorization": `Bearer  ${jwt}`
                // Remove "Content-type" from "headers" for POST file 
            },
            body: formData
        })
    }
    await sleep(100);
    loading.update(load => load = false);
    return await data
}
