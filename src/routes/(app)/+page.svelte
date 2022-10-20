<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { user } from '$lib/stores/user';
	import { AccordionItem, Accordion } from 'flowbite-svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-full">

<!-- <Accordion>
  <AccordionItem>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">My Header 2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" >Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank"  class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion> -->

	<h1 class="text-center text-3xl font-semibold">Xin chào { $user?.profile?.name || ''}! 👋</h1>

	<!-- <h1 class="text-3xl font-bold">
		Welcome to the SvelteKit & PocketBase Project{ $user?.profile ? `, ${$user.profile.name}` : ''}! 👋
	</h1> -->
</section>

