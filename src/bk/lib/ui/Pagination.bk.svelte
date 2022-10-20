<script>
    import { range } from "$lib/stores/utils"
    import {getEventsAction} from './utils';

    import Button from "./Button.svelte";

    const events = getEventsAction();
    export let total_page = 0;
    export let current_page = 0;
    export let selectedPage;
    let pages = [];

    $: (async () => pages = await range(total_page))();

</script>

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
</nav>

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
</style>
