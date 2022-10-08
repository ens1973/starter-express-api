<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="min-h-screen">
	<Header />

	<main class="box-border w-full max-w-5xl p-4 my-0 mx-auto">
		<slot />
	</main>

	<Footer />
</div>

