<script>
    import {getEventsAction} from './utils';
	import {getContext} from 'svelte';
	
    export let value = '';
    export let type = 'text';
    export let error = null;
    export let success = null;
	
    export let password = false;
    export let number = false;
    export let textarea = false;
    export let color = false;
	export let date = false;
	export let range = false;

	
	const events = getEventsAction();

	const onInput = e => {
		const type = e.target.type;
		const val = e.target.value;

		if(type === 'number' || type === 'range')
			value = val === '' ? undefined : +val;
		else
			value = val;
	}

	let getState = getContext('field:state');
	let state_unsubscribe = false;
	if(getState) {
		state_unsubscribe = getState.subscribe(state => {
			if(state === 'error') 
				error = true;
			else if(state === 'success') 
				success = true;
			else
				success = error = false;
		});
	}	

	
	$: if(password) type = 'password';
	$: if(number) type = 'number';
	$: if(textarea) type = 'textarea';
	$: if(color) type = 'color';
	$: if(date) type = 'date';
	$: if(range) type = 'range';
</script>

{#if type === 'textarea'}
	<textarea
		class:error 
		class:success 
		cols=""
		rows="1"
		use:events
		{...$$restProps}
		on:input={onInput}
	>{value}</textarea>
{:else}
	<input type={type} 
		class:error 
		class:success 
		use:events
		{...$$restProps}
		on:input={onInput}
		{value}
	/>
{/if}

<style>
	input,
	textarea {
		@apply transition-all w-full shadow-sm rounded-md px-2 py-1 my-1 border;
	}
	input[type=range]::-moz-range-track,input[type=range]::-webkit-slider-runnable-track {
	  @apply bg-sky-500;
	}
</style>