<!-- <script>
	import {getEventsAction} from './utils';

    import { addToCart } from '$lib/stores/cart'
    import { removeFromCart } from '$lib/stores/cart'

	const events = getEventsAction();
	
    export let item = {
        'id':'1',
        'name':'NIKE AIR',
        'short_description':'NIKE AIR',
        'price':'$129',
        'img':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80'
    };
</script>


<div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" use:events {...$$restProps}>
    <div class="px-4 py-2">
        <h1 class="text-2xl font-bold text-gray-800 uppercase truncate dark:text-white">{item.name}</h1>
        <p class="pt-1 text-sm text-gray-600 dark:text-gray-400 max-h-16 overflow-y-hidden">{item.short_description}</p>
    </div>

    <img class="object-cover w-full h-48 mt-2" src={item.img} alt="NIKE AIR">

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white">{item.price.toLocaleString('vi-VN')}</h1>
        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
            on:click={() => addToCart(item)}>Add to cart</button>
    </div>

</div>


 -->

 <script>
    import { Card, Button, Rating, Badge } from "flowbite-svelte";
    import { addToCart } from '$lib/stores/cart'
    
    export let item = {
        'id':'1',
        'name':'NIKE AIR',
        'short_description':'NIKE AIR',
        'price':'$129',
        'img':'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80'
    };
</script>
<Card padding="none">
    <a href="/" class="flex items-center justify-center">
        <img class="p-5 rounded-t-lg" src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80' alt="product 1" />
        <!-- <img class="p-8 rounded-t-lg" src={item.img} alt="product 1" /> -->
    </a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class='text-xl font-semibold tracking-tight text-gray-900 h-14 overflow-y-hidden dark:text-white'>
        {item.name}
      </h5>
    </a>
    <Rating rating="4" size="18" class="mt-2.5 mb-5">
      <Badge slot="text" class="ml-3">4</Badge>
    </Rating>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price.toLocaleString('vi-VN')}</span>
      <Button on:click={() => addToCart(item)} >Add to cart</Button>
    </div>
  </div>
</Card>