function f(n) {
    if (n <= 1) return 1;
    return f(n - 1) + f(n - 2);
}

function f(n, a1 = 1, a2 = 1) {
    if (n <= 1) return a2;
    return f(n - 1, a2, a2 + a1);
}

function j(n, t = 1) {
    if (n === 1) return t;
    return j(n - 1, n * t);
}
