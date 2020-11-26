// 零宽空格和零宽连接符、零宽非连接符
var a = '\uFEFF', //零宽非断行空格
    b = '\u00A0', //非断行空格
    c = '\u0020', //空格
    d = 'd',
    e = 'e',
    g = 'g',
    f = a + d + c + e + b + g;
console.log(a);
console.log(f);
console.log(f.length);
