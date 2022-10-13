<script>
	import {getEventsAction} from './utils';

	export let value = '';
	export let group = '';

	const events = getEventsAction();

	let checked = false;
	let labeled = $$props.hasOwnProperty('$$slots');

	function handleChange() {
		group = value;
	}
	
	$: checked = (group === value); 
</script>

{#if labeled}
<label class="flex gap-1 py-1 px-2">
    <input type="radio"
		on:change={handleChange}
		use:events	
		{...$$restProps}
		{checked}
	/> 
    <span><slot /></span>
</label>
{:else}
<input type="radio"
	on:change={handleChange}
	use:events 
	{...$$restProps}
	{checked}
/> 
{/if}

