<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="min-h-screen">
	<Header />

	<main class="box-border w-full flex flex-col flex-1 items-center justify-center max-w-5xl p-4 my-0 mx-auto">
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		min-height: 85vh;
	}
</style>
