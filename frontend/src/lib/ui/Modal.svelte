<script>
    import { createEventDispatcher } from 'svelte';
    import {getEventsAction} from './utils';
    import {fade} from 'svelte/transition';
    import {fly} from 'svelte/transition';
    
    export let open = false;

    const dispatch = createEventDispatcher();
    const events = getEventsAction();

    const clickOutside = () => {
        open = false;
        dispatch('cancel', {});
    }

</script>


{#if open}
<div class="mcontainer" transition:fade={{ duration: 200 }}>
    <div class="mbackground" on:click={ () => clickOutside() }/>
    <div transition:fly={{ y: 30, duration: 200 }} class:mmodal={1} use:events {...$$restProps}><slot></slot></div>
</div>
{/if}

<style>
.mcontainer{
    @apply fixed inset-0;
    z-index:9998;
}

.mbackground{
    @apply fixed inset-0 bg-black opacity-50;
}

.mmodal{
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white;
    min-width:400px;
}
</style>
