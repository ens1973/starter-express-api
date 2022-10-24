<script>
    /** @type {import('./$types').PageData} */

    import ListItem from '$lib/main/ListItem.svelte';

    export let data;

</script>


<section class="main w-full flex flex-col flex-1 items-center ">

    <ListItem {data} />

</section>
<style>
  section.main {
    min-height: 85vh;
  }
</style>