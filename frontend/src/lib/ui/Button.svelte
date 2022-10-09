<script>
    import {getEventsAction} from './utils';
    import Card from './Card.svelte';
    import Icon from './Icon.svelte';

    export let disabled = false;
    export let tiny = null;
    export let small = null;
    export let circle = null;
    export let outline = null;
    export let primary = null;
    export let secondary = null;
    export let rounded = null;
    export let dark = null;
    export let info = null;
    export let warning = null;
    export let error = null;
    export let success = null;
    export let clear = null;
    export let loading = null;
    export let icon = null;
    export let iconRight = null;
    export let dropdown = false;
    export let open = false;
    export let autoclose = false;
    export let submit = false;


    const events = getEventsAction();

    const hasSlot = $$props.$$slots && $$props.$$slots !== undefined;

    function dropdownAction(node,param) {

      let autoclose = param;
      let button = node.getElementsByTagName('summary')[0];

      const clickOutside = () => {
        if(!!node.open) node.open=false;
      }

      const clickButton = (e) => {
        e.stopPropagation();
      }

      const clickInDD = (e) => {
        e.stopPropagation();
        if(autoclose) node.open=false;
      }

      node.addEventListener('click',clickInDD);
      button.addEventListener('click',clickButton);
      window.addEventListener('click',clickOutside);


      return {
        update: param => autoclose = param,
        destroy: () => {
          window.removeEventListener('click',clickOutside);
          node.removeEventListener('click',clickInDD);
          button.removeEventListener('click',clickButton);
        }
      }
    }

    $: clIcon = ( (icon !== null || iconRight !== null) && hasSlot);
    $: clIcononly = (dropdown) ? (icon !== null && dropdown===true) : (icon !== null && !hasSlot);
</script>


{#if dropdown === false}
<button  
    class:button={1}
    class:tiny
    class:small
    class:circle
    class:outline
    class:primary
    class:secondary
    class:rounded
    class:dark
    class:info
    class:warning
    class:error
    class:success
    class:clear
    class:loading
    class:icon={clIcon}
    class:icon-only={clIcononly}
    class:disabled

    {...$$restProps}
    use:events

    type={submit ? 'submit' : 'button'}
    disabled={disabled}
>
{#if icon} <span class="lefticon"> <Icon src={icon} size="24px"/> </span>{/if}
<slot></slot>
{#if iconRight} <span class="righticon"> <Icon src={iconRight} size="24px"/> </span>{/if}
</button>
{:else}
  <details class="dropdown" bind:open use:dropdownAction={autoclose}>
    <summary
        class:button={1}
        class:tiny
        class:small
        class:circle
        class:outline
        class:primary
        class:secondary
        class:rounded
        class:dark
        class:info
        class:warning
        class:error
        class:success
        class:clear
        class:loading
        class:disabled
        
        class:icon={clIcon}
        class:icon-only={clIcononly}

        {...$$restProps}
        use:events
    >
    {#if icon} <span class="lefticon"> <Icon src={icon} size="24px"/> </span>{/if}
      {(dropdown !== true) ? dropdown : ''}
    {#if iconRight} <span class="righticon"> <Icon src={iconRight} size="24px"/> </span>{/if}
    </summary>
    <Card style="z-index:1"><slot></slot></Card>
  </details>
{/if}


<style>
.button {
  @apply px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-slate-600 rounded-md focus:outline-none focus:ring;
  outline: none;
}
.button.rounded {
  @apply rounded-md;
}
.button.small {
  @apply px-2 py-1.5;
}
.button.tiny {
  @apply px-1 py-0.5;
}
.button.circle {
  border-radius: 500px;
}
.button.primary { @apply bg-blue-600 border-blue-600; }
.button.secondary { @apply bg-gray-600 border-gray-600; }
.button.dark { @apply bg-gray-600 border-gray-600; }
.button.info { @apply bg-blue-600 border-blue-600; }
.button.warning { @apply bg-yellow-600 border-yellow-600; }
.button.error { @apply bg-red-600 border-red-600; }
.button.success { @apply bg-emerald-600 border-emerald-600; }

.button:hover { @apply bg-slate-500 border-slate-500; }
.button.primary:hover { @apply bg-blue-500 border-blue-500 text-white; }
.button.secondary:hover { @apply bg-gray-500 border-gray-500 text-white; }
.button.dark:hover { @apply bg-gray-500 border-gray-500 text-white; }
.button.info:hover { @apply bg-blue-500 border-blue-500 text-white; }
.button.warning:hover { @apply bg-yellow-500 border-yellow-500 text-white; }
.button.error:hover { @apply bg-red-500 border-red-500 text-white; }
.button.success:hover { @apply bg-emerald-500 border-emerald-500 text-white; }

.button:focus { @apply ring-slate-300 ring-opacity-80; }
.button.primary:focus { @apply ring-blue-300 ring-opacity-80; }
.button.secondary:focus { @apply ring-gray-300 ring-opacity-80; }
.button.dark:focus { @apply ring-gray-300 ring-opacity-80; }
.button.info:focus { @apply ring-blue-300 ring-opacity-80; }
.button.warning:focus { @apply ring-yellow-300 ring-opacity-80; }
.button.error:focus { @apply ring-red-300 ring-opacity-80; }
.button.success:focus { @apply ring-emerald-300 ring-opacity-80; }

.button.outline {
  @apply bg-transparent;
  outline: none;
}
.button.outline.primary { @apply border border-blue-500 text-blue-500; }
.button.outline.secondary { @apply border border-gray-500 text-gray-500; }
.button.outline.dark { @apply border border-gray-700 text-gray-700; }
.button.outline.info { @apply border border-blue-500 text-blue-500; }
.button.outline.warning { @apply border border-yellow-500 text-yellow-500; }
.button.outline.error { @apply border border-red-500 text-red-500; }
.button.outline.success { @apply border border-emerald-500 text-emerald-500; }

.button.outline:hover {
  @apply bg-slate-200 border-slate-200;
  outline: none;
}
.button.outline.primary:hover { @apply bg-blue-400 border-blue-400 text-white; }
.button.outline.secondary:hover { @apply bg-gray-400 border-gray-400 text-white; }
.button.outline.dark:hover { @apply bg-gray-600 border-gray-600 text-white; }
.button.outline.info:hover { @apply bg-blue-400 border-blue-400 text-white; }
.button.outline.warning:hover { @apply bg-yellow-400 border-yellow-400 text-white; }
.button.outline.error:hover { @apply bg-red-400 border-red-400 text-white; }
.button.outline.success:hover { @apply bg-emerald-400 border-emerald-400 text-white; }

.button.outline:focus { @apply ring-slate-300 ring-opacity-80; }
.button.outline.primary:focus { @apply ring-blue-300 ring-opacity-80; }
.button.outline.secondary:focus { @apply ring-gray-300 ring-opacity-80; }
.button.outline.dark:focus { @apply ring-gray-300 ring-opacity-80; }
.button.outline.info:focus { @apply ring-blue-300 ring-opacity-80; }
.button.outline.warning:focus { @apply ring-yellow-300 ring-opacity-80; }
.button.outline.error:focus { @apply ring-red-300 ring-opacity-80; }
.button.outline.success:focus { @apply ring-emerald-300 ring-opacity-80; }

@keyframes button-pop {
    0% { transform: scale(1); }
    25% { transform: scale(0.9); }
    75% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.button:active{
  animation: button-pop 150ms linear;
}

.button.disabled:active{
  animation: none;
}
.button.disabled,
.button.primary.disabled,
.button.secondary.disabled,
.button.dark.disabled,
.button.info.disabled,
.button.warning.disabled,
.button.error.disabled,
.button.success.disabled,

.button.disabled:hover,
.button.primary.disabled:hover,
.button.secondary.disabled:hover,
.button.dark.disabled:hover,
.button.info.disabled:hover,
.button.warning.disabled:hover,
.button.error.disabled:hover,
.button.success.disabled:hover,

.button.outline.disabled,
.button.outline.primary.disabled,
.button.outline.secondary.disabled,
.button.outline.dark.disabled,
.button.outline.info.disabled,
.button.outline.warning.disabled,
.button.outline.error.disabled,
.button.outline.success.disabled,

.button.outline.disabled:hover,
.button.outline.primary.disabled:hover,
.button.outline.secondary.disabled:hover,
.button.outline.dark.disabled:hover,
.button.outline.info.disabled:hover,
.button.outline.warning.disabled:hover,
.button.outline.error.disabled:hover,
.button.outline.success.disabled:hover
{
  @apply bg-slate-300 border-slate-300 text-slate-400;
}
@keyframes loading {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading {
    color: transparent !important;
    min-height: .8rem;
    pointer-events: none;
    position: relative;
}

.loading::after {
    animation: loading 500ms infinite linear;
    border: .2rem solid #FFFFFF;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: .8rem;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    position: absolute;
    top: 50%;
    width: .8rem;
    z-index: 1;
}


.icon > .lefticon{
  margin: -10px 10px -10px 0px;
}

.icon > .righticon{
  margin: -10px 0px -10px 10px;
}


.icon-only{
  padding:.5rem .65rem;
}

summary, button{
  white-space: nowrap;
}

summary::-webkit-details-marker {
  display:none;
}
</style>
