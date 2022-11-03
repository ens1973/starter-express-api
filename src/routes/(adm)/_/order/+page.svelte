<script>
    export let data
</script>
<h1>Admin</h1>

{#each data?.items as item, index (index)}
<p class="">{item.id}</p>
{/each}