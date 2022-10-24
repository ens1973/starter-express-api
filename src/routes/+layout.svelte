<script>
	import '../app.css';

	import { user } from '$lib/stores/user';
	import Notifications from '$lib/notifications/Notifications.svelte';
    
    export let data;

    $:(async () => user.update(u => u = {...data}))();
</script>

<Notifications />

<div class="min-h-screen">
	<slot />
</div>
