<script>
    import { cart } from '$lib/stores/cart'
    import { addToCart } from '$lib/stores/cart'
    import { placeOrder } from '$lib/stores/cart'
    import { removeFromCart } from '$lib/stores/cart'
  	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  	import { Button } from 'flowbite-svelte';
    let current_cart;
    $: (async () => cart.subscribe((c) => current_cart = JSON.stringify(c)))();
</script>

<section class="main w-full overflow-x-auto ">
{#if $cart?.items.length > 0}
<Table striped={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Quantity</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>Action</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
  	{#each $cart.items as item, index (index)}
    <TableBodyRow>
      <TableBodyCell>{item.name}</TableBodyCell>
      <TableBodyCell>{item.quantity}</TableBodyCell>
      <TableBodyCell>{item.price}</TableBodyCell>
      <TableBodyCell>
        <Button color="red" on:click={() => removeFromCart(item)}>Remove</Button>
      </TableBodyCell>
    </TableBodyRow>
    {/each}
    <TableBodyRow>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell>
        <form action="?/placeorder" method="POST">
          <input type="text" name="json" bind:value={current_cart}>
          <Button color="green" type="submit">Order Now</Button>
        </form>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
{/if}
</section>
<style>
  section.main {
    min-height: 85vh;
  }
</style>