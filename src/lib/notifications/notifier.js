import { notification } from './store.js'

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function parseLegacyOptions (options) {
  return typeof options === 'number' ? { timeout: options } : options
}

export function send (message, type = 'default', options) {
  notification.set({ type, message, options: parseLegacyOptions(options) })
}

export function danger (messages, options={}) {
  options.color = 'red'
  if (isObject(messages)) {
    Object.keys(messages).forEach((key) => {
      [...messages[key]].forEach((message) => {
        send(message, 'danger', options)
      });
    });
  } else {
    send(messages, 'danger', options)
  }
}

export function warning (messages, options={}) {
  options.color = 'yellow'
  if (isObject(messages)) {
    Object.keys(messages).forEach((key) => {
      [...messages[key]].forEach((message) => {
        send(message, 'warning', options)
      });
    });
  } else {
    send(messages, 'warning', options)
  }
}

export function info (messages, options={}) {
  options.color = 'blue'
  if (isObject(messages)) {
    Object.keys(messages).forEach((key) => {
      [...messages[key]].forEach((message) => {
        send(message, 'info', options)
      });
    });
  } else {
    send(messages, 'info', options)
  }
}

export function success (messages, options={}) {
  options.color = 'green'
  if (isObject(messages)) {
    Object.keys(messages).forEach((key) => {
      [...messages[key]].forEach((message) => {
        send(message, 'success', options)
      });
    });
  } else {
    send(messages, 'success', options)
  }
}
