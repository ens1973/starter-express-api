<script>
	import '../app.css';

	import { user } from '$lib/stores/user';
	import { menu } from '$lib/stores/menu';
	import Notifications from '$lib/notifications/Notifications.svelte';
    
    export let data;

    // $:console.log(data);
    $:(async () => user.update(u => u = {...data.user}))();
    $:(async () => menu.update(m => m = [...data.menu]))();
</script>

<Notifications />

<div class="min-h-screen">
	<slot />
</div>
