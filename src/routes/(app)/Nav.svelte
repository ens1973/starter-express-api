<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import { Badge, Button } from 'flowbite-svelte';
    
    import { user } from '$lib/stores/user';
    import { menu } from '$lib/stores/menu';
    import { cart } from '$lib/stores/cart'

    let brandName = 'Anhcafe.com';
    let brandContent = 'Anh cafe . com';

    let currentPageTitle = 'Anhcafe.com';
    const getCurrentPageTitle = async (pathname) => {
        let arr = pathname.split('/')

        let path = '/'
        if (arr.length >= 2)
            path = `/${arr[1]}`;
        
        
        let currentMenuItem = $menu.filter((item) => {
            if (path === item.link)
                return item
            return
        });

        if (currentMenuItem.length <= 0)
            return 'Anhcafe'
        let title = currentMenuItem[0].title;
        if (arr.indexOf('page') >= 0)
            title = `${currentMenuItem[0].title} | Trang ${arr.pop()}`;
        return title
    }
    $: (async () => currentPageTitle = await getCurrentPageTitle($page.url.pathname))();
</script>

<svelte:head>
    <title>{currentPageTitle} | {brandName}</title>
    <meta name="description" content={brandContent} />
</svelte:head>

<Navbar let:hidden let:toggle rounded color="form">
    <NavBrand href="/">
        <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> -->
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{brandName}</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each $menu as item, index}
        <NavLi href={item.link} active={$page.url.pathname === item.link}>{item.title}</NavLi>
        {/each}

        <NavLi href='/cart'>
              Cart<Badge rounded class="ml-2 w-5 h-5">{$cart?.total_quantity}</Badge>
        </NavLi>

        {#if $user?.id }
        <NavLi>
            <form class="nav-link" action="/logout" method="POST">
                <button>Logout</button>
            </form>
        </NavLi>
        {/if}
    </NavUl>
</Navbar>