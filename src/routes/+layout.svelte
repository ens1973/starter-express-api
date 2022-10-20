<script>
	import '../app.css';

	import { user } from '$lib/stores/user';
    
    export let data;

    $:(async () => user.update(u => u = {...data}))();
</script>

<div class="min-h-screen">
	<slot />
</div>
