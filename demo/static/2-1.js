// for (let i = 0; i < 3; i++) {
//     console.log('内部', i);
// }
// // console.log('外部:', i);

// if (true) {
//     let a = 5;
// }

window.qq = 123;

const tt = window.qq;

window.qq = null;

console.log(tt);
