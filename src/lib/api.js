// import { env } from '$env/dynamic/public';
import { PUBLIC_API_URL } from '$env/static/public';
import PocketBase from 'pocketbase'

export const client = new PocketBase(PUBLIC_API_URL);
export const perPage = 10;

export const serializeNonPOJOs = async (nonPOJOs) => {
    return JSON.parse(JSON.stringify(nonPOJOs));
}

export const serializeObj = async (obj) => {
    return JSON.parse(obj);
}