
<script>
  import { Alert } from 'flowbite-svelte';
  import { toaster } from './toaster.js'

  export let themes = {
    danger: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    info: '#3B82F6',
    default: '#6366F1'
  }

  export let timeout = 5000
  export let sessionKey = 'byk-toasts'

  let toasts = []

  function animateOut (node, { delay = 0, duration = 1000 }) {
    return {
      delay,
      duration,
      css: t => `opacity: ${(t - 0.7) * 1}; transform-origin: top right;`
    }
  }

  function createToast ({ detail }) {
    const { message, type, options = {} } = detail
    const background = themes[type] || themes.default
    const color = options.color || false
    // const red = options.red || false
    // const yellow = options.yellow || false
    // const blue = options.blue || false
    // const green = options.green || false
    const persist = options.persist
    const accent = options.accent
    // const computedTimeout = options.persist ? 0 : (options.timeout || timeout)
    const computedTimeout = (options.timeout || timeout)
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '')

    try {
      sessionStorage.setItem(
        sessionKey,
        JSON.stringify([
          ...JSON.parse(sessionStorage.getItem(sessionKey) || '[]'),
          { ...detail, id }
        ])
      )
    } catch (e) {}
    // console.log(red, yellow, blue, green)
    toasts = [ {
      id,
      message,
      background,
      color,
      // red,
      // yellow,
      // blue,
      // green,
      accent,
      persist,
      timeout: computedTimeout,
      width: '100%'
    }, ...toasts ]
  }

  function maybePurge (toast) {
    // !toast.persist && purge(toast.id)
    purge(toast.id)
  }

  function purge (id) {
    const filter = t => t.id !== id
    toasts = toasts.filter(filter)
    try {
      sessionStorage.setItem(
        sessionKey,
        JSON.stringify(
          JSON.parse(sessionStorage.getItem(sessionKey) || '[]').filter(filter)
        )
      )
    } catch (e) {

    }
  }
</script>

<ul class="toasts" use:toaster={sessionKey} on:notify={createToast}>
  {#each toasts as toast (toast.id)}
    <!-- <li class="toast rounded-md overflow-hidden" style="background: {toast.background};" out:animateOut>
      {#if toast.persist}
      <button class="close" on:click={() => purge(toast.id)}>
        ✕
      </button>
      {/if}
      <div class="content">
        {toast.message}
      </div>
      <div 
        class="progress" 
        style="animation-duration: {toast.timeout}ms;"
        on:animationend={() => maybePurge(toast) }>
      </div>
    </li> -->

    <li class="relative block alert m-1" out:animateOut>
      <div class="flex flex-toasts items-center">
        
        <Alert color="{toast.color}" accent={toast.accent} dismissable={toast.persist}>
          <span slot="icon"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></span>
          <span class="mr-2">{toast.message}</span>
        </Alert>

      </div>
      <div 
        class="progress" 
        style="animation-duration: {toast.timeout}ms;"
        on:animationend={() => maybePurge(toast) }>
      </div>
    </li>

  {/each}
</ul>

<style>
  .toasts {
    list-style: none;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 9999;
  }
  
  .toasts > .alert {
    /*z-index: 9999;*/
    animation: animate-in 600ms forwards;
  }
    /*
  .toasts .flex-toasts::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .toasts .alert-info {
    @apply text-sky-500;
  }
  .toasts .alert-error {
    @apply text-red-500;
  }
  .toasts .alert-warning {
    @apply text-orange-500;
  }
  .toasts .alert-success {
    @apply text-green-500;
  }

  .toasts .alert-info .flex-toasts::before {
    background-color: rgba(224,242,254,0.75);
  }
  .toasts .alert-error .flex-toasts::before {
    background-color: rgba(254,226,226,0.75);
  }
  .toasts .alert-warning .flex-toasts::before {
    background-color: rgba(255,237,213,0.75);
  }
  .toasts .alert-success .flex-toasts::before {
    background-color: rgba(220,252,231,0.75);
  }
  .toasts > .alert > button{
    position: absolute;
    font-size: 18px;
    right: 8px;
    top: 4px;
    margin: 0;
    line-height: 1;
    color: #fff;
    outline: none;
    border: 0;
    background-color: transparent;
  }
*/

    
  .toasts > .alert > .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.3);
    height: 0px;
    animation-name: shrink;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  /*
  .toasts > .toast:before,
  .toasts > .toast:after {
    content:"";
    position: absolute;
    z-index:-1;
    top:50%;
    bottom:0;
    left:1vw;
    right:1vw;
    border-radius:100px / 10px;
  }
  
  .toasts > .toast:after {
    right: 1vw;
    left: auto;
    transform:skew(8deg) rotate(3deg);
  }*/

  @keyframes animate-in {
    0%,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
      animation-timing-function: cubic-bezier(.215, .61, .355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }

    75% {
      transform: translate3d(10px, 0, 0);
    }

    90% {
      transform: translate3d(-5px, 0, 0);
    }

    to {
      transform: none;
    }
  }

  @keyframes shrink { 
    0% { 
      width: 100%; 
    }
    100% { 
      width: 0; 
    }
  }

  @media (min-width: 480px) {
    @keyframes animate-in {
      0%,
      60%,
      75%,
      90%,
      to {
        -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        animation-timing-function: cubic-bezier(.215, .61, .355, 1);
      }

      0% {
        opacity: 0;
        transform: translate3d(3000px, 0, 0);
      }

      60% {
        opacity: 1;
        transform: translate3d(-25px, 0, 0);
      }

      75% {
        transform: translate3d(10px, 0, 0);
      }

      90% {
        transform: translate3d(-5px, 0, 0);
      }

      to {
        transform: none;
      }
    }
  
    @keyframes shrink { 
      0% { 
        width: 100%;
      }
      100% { 
        width: 0; 
      }
    }
  }

  @media screen and (min-width: 600px) {
    /*.toasts > .toast {
      min-width: 40vw;
      min-height: auto;
    }*/
  }
</style>
