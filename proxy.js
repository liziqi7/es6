// 对象代理

var obj = new Proxy(
    { count: 2 },
    {
        get(target, key, receiver) {
            console.log(target, key, receiver);
            return Reflect.get(target, key, receiver);
        },
        set(target, key, val, receiver) {
            console.log(target, key, val, receiver);
            return Reflect.set(target, key, val, receiver);
        }
    }
);

// 同一个拦截器函数,可以设置拦截多个操作

var handler = {
    // 拦截对象属性的读取
    // 比如proxy.foo 或者 proxy['foo']
    get: function (target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },
    // 拦截对象属性的设置
    // 比如proxy.foo=v 或者 proxy['foo']=v, 返回一个布尔值
    set: function (target, key, val, receiver) {
        return Reflect.set(target, key, val, receiver);
        // return true;
    },
    // 拦截propKey in proxy的操作,返回一个布尔值
    has: function (target, key) {},
    // 拦截delete proxy[key]的操作,返回一个布尔值
    deleteProperty: function (target, key) {},
    // 拦截Object.getOwnPropertyNames(proxy),Object.getOwnPropertySymbols(proxy),Object.keys(proxy),
    // for...in循环,返回一个数组.该方法返回目标对象所有自身的属性的属性名,
    // 而Object.keys()返回结果仅包括目标对象自身的可遍历属性
    ownKeys(target) {},
    // 拦截Object.getOwnPropertyDescriptor(target,key)返回属性的描述对象
    getOwnPropertyDescriptor(target, key) {},
    // 拦截Object.defineProperty(proxy,key,desc),
    // Object.defineProperties(proxy,desc)返回一个布尔值
    defineProperty(target, key, desc) {},
    // 拦截Object.preventExtensions(proxy) 返回一个布尔值
    preventExtensions(target) {},
    // 拦截Object.getPrototypeOf(proxy) 返回一个对象
    getPrototypeOf(target) {},
    // 拦截Object.isExtensible(proxy) 返回一个布尔值
    isExtensible(target) {},
    // 拦截Object.setPrototypeOf(proxy,proto) 返回一个布尔值.如果目标是函数,还有两种额外操作
    setPrototypeOf(target, proto) {},
    // 拦截Proxy实例作为函数调用的操作,比如proxy(...args),proxy.call(object,...args),proxy.apply(...)
    apply: function (target, thisBinding, args) {
        return args[0];
    },
    // 拦截Proxy实例作为构造函数调用的操作,比如new proxy(...args)
    construct: function (target, args) {
        return { value: args[1] };
    }
};

var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

fproxy(1, 2); // 1
// ==fproxy.apply(window,[1,2])
new fproxy(1, 2); // {value: 2}
fproxy.prototype === Object.prototype; // true
fproxy.foo === 'Hello, foo'; // true
