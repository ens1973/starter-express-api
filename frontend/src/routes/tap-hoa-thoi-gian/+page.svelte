<script>
    /** @type {import('./$types').PageData} */

    import ListItem from '$lib/main/ListItem.svelte';

	export let data;

    $: console.log(data)
</script>

<!-- <ListItem {data} /> -->
