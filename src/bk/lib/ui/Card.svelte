<script>
	import {getEventsAction} from './utils';

	const events = getEventsAction();
    export let tiny = null;
    export let small = null;
</script>

<div 
	class:normal-card={1}
    class:tiny
    class:small use:events {...$$restProps}>
{#if $$slots.header}
	<header>
    	<slot name="header"></slot>
  	</header>
{/if}
	<slot></slot>
{#if $$slots.footer}
	<footer>
    	<slot name="footer"></slot>
  	</footer>
{/if}
</div>

<style>
	.normal-card { @apply rounded-md shadow-md p-4; }
	.normal-card.small {
	  @apply p-2.5;
	}
	.normal-card.tiny {
	  @apply p-1;
	}
	header { @apply pb-2; }
	footer { @apply pt-2; }
</style>
