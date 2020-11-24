// let arr = [1, 2, 3, 4];
// let [a, b, c] = arr;
// console.log(a, b, c);

// let [a, b, [c, d], e = 5] = [1, 2, [3, 4], 6];
// console.log(a, b, c, d, e);

// 对象解构
// let user = {
//     name: 'jack',
//     age: 17,
// };

// let { name, age: uage, book = 'xx' } = user;
// console.log(name, uage, book);

// 字符串解构
// let str = 'imooc';
// let [a, b, c, d, e] = str;
// console.log(a, b, c, d, e);

// function foo([a, b, c]) {
//     console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// foo(arr);

// function foo({ name, age, school = 'imooc' }) {
//     console.log(name, age, school);
// }
// let user = {
//     name: 'jack',
//     age: 17,
//     school: 'xxx',
// };
// foo(user);

// function foo() {
//     let user = {
//         name: 'jack',
//         age: 17,
//         school: 'xxx',
//     };
//     return user;
// }
// let { name, age } = foo();
// console.log(name, age);

// let json = '{"a":"hello","b":"world"}';
// let { a, b } = JSON.parse(json);
// console.log(a, b);
