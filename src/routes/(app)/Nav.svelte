<script>
	// export let brandName = 'Anh cafe';
    import { page } from '$app/stores';

    import { user } from '$lib/stores/user';

    // $: console.log($user);
    let menu = [
        {'title':'Home', 'link':'/'},
        {'title':'Tap hoa', 'link':'/shop'},
        // {'title':'Đá quý', 'link':'/da-quy'},
        // {'title':'Website', 'link':'/website'},
        // {'title':'Blog', 'link':'/blog'},
        // {'title':'Admin', 'link':'/admin'}
    ]

    // export let user;
    let brandName = 'anhcafe.com';
    let brandContent = 'Anh cafe . com';

    let currentPageTitle = 'Home';
    $: (async () => currentPageTitle = await getCurrentPageTitle($page.url.pathname))();


    const getCurrentPageTitle = async (pathname) => {
        let arr = pathname.split('/')

        let path = '/'
        if (arr.length >= 2)
            path = `/${arr[1]}`;
        
        
        let currentMenuItem = menu.filter((item) => {
            if (path === item.link)
                return item
            return
        });

        if (currentMenuItem.length <= 0)
            return 'Error'
        let title = currentMenuItem[0].title;
        if (arr.indexOf('page') >= 0)
            title = `${currentMenuItem[0].title} | Trang ${arr.pop()}`;
        return title
    }

</script>


<svelte:head>
    <title>{currentPageTitle} | {brandName}</title>
    <meta name="description" content={brandContent} />
</svelte:head>

<nav class="flex w-full bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        {#each menu as item, index}
            <a href={item.link} class="nav-link"
                class:active={$page.url.pathname === item.link} >{item.title}</a>
        {/each}
        {#if $user?.profile }
                <form class="nav-link" action="/logout" method="POST">
                    <button>Logout</button>
                </form>
        {:else}
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/register">Register</a>
        {/if}
    </div>
</nav>

<style>
    .nav-link {
        @apply border-b-2 border-transparent transition-colors duration-200 transform mx-1.5 sm:mx-6;
    }
    .nav-link:hover,
    .nav-link:focus,
    .nav-link:active,
    .nav-link.active
    {
        @apply text-gray-800 dark:text-gray-200 border-blue-500;
    }
</style>