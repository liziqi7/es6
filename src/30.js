// outer: for (let i = 0; i < 100; i++) inner: for (let j = 0; j < 100; j++) if (i == 50 && j == 50) break outer;
// outer: for (let i = 0; i < 100; i++) inner: for (let j = 0; j < 100; j++) if (i >= 50 && j == 50) continue outer;
// let o = { a: 1, b: 2 };
// with ((o = { a: 2, b: 3 })) {
//     console.log(a, b);
// }
// console.log(o);

// try {
//     throw new Error('error 666');
// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('finally');
// }
// const a = 2;
// if (true) {
//     const a = 3;
//     console.log(a); // 局部作用域
// }
// console.log(a); // 全局作用域

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// console.log(new Rectangle(5, 6).area);
