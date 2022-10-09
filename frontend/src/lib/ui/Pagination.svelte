<script>
    import { range } from "$lib/stores/utils"
    import {getEventsAction} from './utils';
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

    $: (async () => pages = await range(pagesize, current_page - pageshow))();
    $: (async () => pathname = await pathnameWithoutPageNum($page.url.pathname))();

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

</script>


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

<!-- 
<nav class:hidden={!total_page}
    use:events {...$$restProps}>
    <ul class="flex flex-wrap items-center justify-center gap-1">
        <li class="inline-block m-0 p-0" >
            <Button small rounded outline dark on:click={async () => await selectedPage(1)}
                disabled={current_page <= 1} >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </Button>
        </li>
        <li class="inline-block m-0 p-0" >
            <Button small rounded outline dark on:click={async () => await selectedPage(current_page - 1)}
                disabled={current_page <= 1} >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </Button>
        </li>
        {#each pages as page, index}
            {#if current_page >= page - 1 && current_page <= page + 1}
            <li class="inline-block m-0 p-0" >
                <Button small rounded outline dark on:click={async () => await selectedPage(page)}
                    disabled={current_page == page} >
                    <span>{page}</span>
                </Button>
            </li>
            {/if}
        {/each}
        <li class="inline-block m-0 p-0" >
            <Button small rounded outline dark on:click={async () => await selectedPage(current_page + 1)}
                disabled={current_page >= total_page} >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </Button>
        </li>
        <li class="inline-block m-0 p-0" >
            <Button small rounded outline dark on:click={async () => await selectedPage(total_page)}
                disabled={current_page >= total_page} >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </Button>
        </li>
    </ul>   
</nav> -->

<!-- <div
    class="navbackdrop"
    class:w-full={navIsOpen}
    class:left-64={navIsOpen}
    class:left-0={!navIsOpen}
    on:click={() => toggleNav()}/> -->

<!-- <div class="mx-4 my-2 flex print:hidden">
    <button on:click={() => toggleNav()}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </button>
    <p class="ml-2 text-xl leading-none">{headerName}</p>
</div> -->
<!-- 
<style>
    nav{
        /*@apply w-64 h-full top-0 fixed transition-all;*/
        /*width:100%;*/
        /*flex-direction: row;*/
    }
    .fixed-nav {
        z-index: 9997;
    }
    /*.fixed-nav.-translate-x-full::after {
        @apply bg-yellow-100;
        position: absolute;
        content: '';
        left: 100%;
        top: 0;
        bottom: 0;
        width: 5px;
    }*/
    .navbackdrop{
        @apply fixed top-0 bottom-0;
        z-index: 9996;
    }
</style> -->
