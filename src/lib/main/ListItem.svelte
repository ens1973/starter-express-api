<script>
    import CardProduct from '../ui/CardProduct.svelte';
    import Pagination from '../ui/Pagination.svelte';

    export let data

    let products = [];
    let total_page = 10;
    let current_page = 1;

    $: total_page = data.totalPages ?? 10
    $: current_page = data.page ?? 1

    const mapProducts = async (items) => {
        const i = items.map((item) => {
            return {
                id: item.id,
                name: item.name.length > 50 ? `${item.name.slice(0, 50)}...` : item.name,
                description: item.description,
                short_description: item.short_description,
                price: item.price,
                quantity: 1,
            }
        });
        // console.log(i)
        return i;
    }

    $: (async () => products = await mapProducts(data?.items) )();
</script>


{#if products.length > 0}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-2">
    {#each products as item, index (index)}
        <!-- <p>{item.name}</p> -->
        <CardProduct {item}/>
    {/each}
</div>

    {#if total_page >= 2}
    <div class="flex flex-col items-center justify-center">
        <!-- <p>total_page {total_page}</p> -->
        <!-- <p>current_page {current_page}</p> -->
        <Pagination {total_page} {current_page} />
    </div>
    {/if}

{:else}
<div class="flex flex-col flex-1 items-center justify-center">
<p class="text-xl text-center text-gray-800 capitalize lg:text-2xl dark:text-white">
    Toàn bộ sản phẩm đã được bán hết<br>Vui lòng quay lại sau.
</p>
</div>
{/if}