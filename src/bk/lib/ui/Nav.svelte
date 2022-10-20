<script>
 //    import { page } from '$app/stores';
	// import {getEventsAction} from './utils';
 //    import { user } from "$lib/stores/user"

	// const events = getEventsAction();
	// export let menu = [];
 //    export let info = false;
 //    export let success = false;
 //    export let warning = false;
 //    export let error = false;
 //    export let transparent = false;

	// let headerName = menu[0].name
 //    let navIsOpen = false;
    
 //    const toggleNav = () => {
 //        navIsOpen = !navIsOpen;
 //    }

	// const selectMenuItem = (idx) => {
	// 	// toggleNav();
	// 	// if ($user.access_token !== "")
	// 	// 	headerName = menu[idx].name;
	// 	headerName = menu[idx].name;
	// }

	export let brandName = 'Anh cafe';
</script>
<!-- <svelte:head>
	<title>{`${headerName} | taphoathoigian`}</title>
	<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
</svelte:head>
<nav 
	class:nav={1}
	class:bg-cyan-50={info && !transparent}
	class:bg-emerald-50={success && !transparent}
	class:bg-amber-50={warning && !transparent}
	class:bg-rose-50={error && !transparent}
	use:events {...$$restProps}>
	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each menu as item, index}
		    <li class="inline-block m-0 p-0" on:click={() => selectMenuItem(index)} >
		        <a 
		            href={item.link} 

		            class:bg-cyan-100={$page.url.pathname === item.link && info}
		            class:bg-emerald-100={$page.url.pathname === item.link && success}
		            class:bg-amber-100={$page.url.pathname === item.link && warning}
		            class:bg-rose-100={$page.url.pathname === item.link && error}

		            class:border-transparent={$page.url.pathname === item.link}

		            class:border-cyan-100={$page.url.pathname !== item.link && info}
		            class:border-emerald-100={$page.url.pathname !== item.link && success}
		            class:border-amber-100={$page.url.pathname !== item.link && warning}
		            class:border-rose-100={$page.url.pathname !== item.link && error}

		            class="block border border-solid font-semibold truncate rounded-md hover:underline px-2 py-1" 
		            >
		            {item.name}
		        </a>
		    </li>
		{/each}
	</ul>	
</nav> -->


    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">{brandName}</a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="items-center md:flex">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>
                </div>

                <div class="flex justify-center md:block">
                    <a class="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

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
