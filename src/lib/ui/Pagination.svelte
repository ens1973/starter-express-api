<script>
    import {getEventsAction} from './utils';
    import {range} from './utils';
    // import range from "../stores/utils"
    import { page } from '$app/stores';

    import Button from "./Button.svelte";

    const events = getEventsAction();

    export let total_page = 0;
    export let current_page = 0;
    // export let selectedPage;
    
    export let pageshow = 2;
    export let pagesize = 5;
    let pages = [];
    let pathname = '/';
    

    const pathnameWithoutPageNum = async ( pathname ) => {
        let arr = pathname.split('/')
        if (arr.indexOf('page') >= 0) {
            arr.pop();
        } else {
            arr.push('page');
        }
        // console.log(arr);
        let joinPathname = arr.join("/");

        return joinPathname
    }

    $: (async () => pages = await range(pagesize, current_page - pageshow))();
    $: (async () => pathname = await pathnameWithoutPageNum($page.url.pathname))();
</script>

<!-- <p>total_page {total_page}</p> -->


<div class="flex" use:events {...$$restProps}>
    <a href="{pathname}/{current_page - 1 < 1 ? 1 : current_page - 1}"  class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200" 
        class:text-gray-300={current_page <= 1} 
        class:cursor-not-allowed={current_page <= 1} 
        class:pointer-events-none={current_page <= 1} >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </a>
    {#each pages as page, index}
        {#if current_page >= page - pageshow && current_page <= page + pageshow && page <= total_page}
        <a href="{pathname}/{page}"  class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
            class:text-gray-300={current_page === page} 
            class:cursor-not-allowed={current_page === page} 
            class:pointer-events-none={current_page === page} >
            <span>{page}</span>
        </a>
        {/if}
    {/each}

    <a href="{pathname}/{current_page + 1 > total_page ? total_page : current_page + 1}"  class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        class:text-gray-300={current_page >= total_page}
        class:cursor-not-allowed={current_page >= total_page}
        class:pointer-events-none={current_page >= total_page}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </a>
</div>
