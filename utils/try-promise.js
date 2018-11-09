export default (fn, errHandler) => (...args) => fn(...args).catch(errHandler || console.error);
