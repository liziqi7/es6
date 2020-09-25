let s = Symbol('t');
const a = { [s]: 2 };

const wm = new WeakMap();
let key = { a: 1 };
let obj = { foo: 1 };
