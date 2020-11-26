// let arr = [1, 2];
// let iter = arr[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let it = makeIterator([1, 2]);
// function makeIterator(array) {
//     var nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true, value: undefined };
//         },
//     };
// }
// console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let obj = {
//     [Symbol.iterator]: function () {
//         let count = 0;
//         return {
//             next: function () {
//                 count++;
//                 if (count > 10) {
//                     return {
//                         value: count,
//                         done: true,
//                     };
//                 }
//                 return {
//                     value: count,
//                     done: false,
//                 };
//             },
//         };
//     },
// };
// let o = obj[Symbol.iterator]();
// console.log(o.next());
// console.log(o.next());
// console.log(o.next());
// console.log(...obj);
// for (let i of obj) {
//     console.log(i);
// }

let generator = function* () {
    yield 1;
    yield* [2, 3, 4];
    yield 5;
};

var iterator = generator();
console.log(generator().next());
for (let i of iterator) {
    console.log(i);
}
