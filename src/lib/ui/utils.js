export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}


import {bubble, listen,get_current_component} from 'svelte/internal';
export function getEventsAction() {
    const component = get_current_component();
    return node => {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach(
          event => listeners.push(
              listen(node, event, e =>  bubble(component, e))
            )
        );
  
      return {
        destroy: () => {
            listeners.forEach(
                listener => listener()
            );
        }
      }
    };
}


    
export const range = (size, start = 1, step = 1) => {
    if (start < 1)
        start = 1
    return [...Array(size).keys()].map(i => (i + start) * step);
}