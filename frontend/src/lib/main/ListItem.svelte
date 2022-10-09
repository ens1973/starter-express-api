<script>
    /** @type {import('./$types').PageData} */
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';
    import CardProduct from '$lib/ui/CardProduct.svelte';
    import Pagination from '$lib/ui/Pagination.svelte';

	export let data;

    let products = [];
    let total_page = 10;
    let current_page = 1;

	$: products = [...data.items] ?? []
    $: total_page = data.total_page ?? 10
    $: current_page = data.current_page ?? 1
    // $: console.log('front ', data);
    // $: console.log('front ', products);


</script>



<!-- <h1>tap hoa thoi gian</h1> -->
{#if products.length > 0}
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-2">
    {#each products as item, index (index)}
	    <CardProduct {...item} />
    {/each}
</div>
<div class="flex flex-col items-center justify-center">
    <Pagination {total_page} {current_page} />
</div>
{:else}
<div class="flex flex-col flex-1 items-center justify-center">
<p class="text-xl text-center text-gray-800 capitalize lg:text-2xl dark:text-white">
    Toàn bộ sản phẩm đã được bán hết<br>Vui lòng quay lại sau.
</p>
</div>
{/if}
