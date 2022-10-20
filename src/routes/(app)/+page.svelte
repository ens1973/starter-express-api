<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { user } from '$lib/stores/user';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-full">
	<!-- <h1 class="text-center">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter /> -->
	<h1 class="text-center text-3xl font-semibold">Xin chào { $user?.profile?.name || ''}! 👋</h1>

	<!-- <h1 class="text-3xl font-bold">
		Welcome to the SvelteKit & PocketBase Project{ $user?.profile ? `, ${$user.profile.name}` : ''}! 👋
	</h1> -->
</section>

