console.log('1');
const promise = new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
    console.log('3');
}).then(() => {
    console.log('resolve');
});
console.log('2');
