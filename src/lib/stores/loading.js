import { writable } from 'svelte/store';
import {onMount} from 'svelte';

export const loading = writable(false);


export const mounted = {
  subscribe(fn) {
    fn(true);
    onMount(() => fn(false));
    return () => {};
  }
};