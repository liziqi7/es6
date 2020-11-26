// 编译原理
// 产生式
// 词法分析
var token = [];
var tokens = [];
const EOF = Symbol('EOF');
const start = char => {
    if (isNumber(char)) {
        token.push(char);
        return inNumber;
    }
    if (char === '(' || char === ')') {
        emmitToken(char, char);
        return start;
    }
    if (isOperator(char)) {
        if (char === '-' && isOperator(tokens[tokens.length - 1].type)) {
            token.push(char);
            return inNumber;
        }
        emmitToken(char, char);
        return start;
    }
    if (char === ' ') {
        return start;
    }
    if (char === '\r' || char === '\n') {
        return start;
    }
    if (char === EOF) {
        emmitToken('EOF');
        return;
    }
};
function inNumber(char) {
    if (isNumber(char)) {
        token.push(char);
        return inNumber;
    } else {
        emmitToken('Number', token.join(''));
        token = [];
        return start(char);
    }
}
function emmitToken(type, value) {
    console.log(type, value);
    tokens.push({ type, value });
}
const isOperator = char => {
    return char === '+' || char === '-' || char === '*' || char === '/' || char === '(';
};
const isNumber = char => {
    return (
        char === '1' ||
        char === '2' ||
        char === '3' ||
        char === '4' ||
        char === '5' ||
        char === '6' ||
        char === '7' ||
        char === '8' ||
        char === '9' ||
        char === '0' ||
        char === '.'
    );
};

// var input = '1024 + 60/3 ';
var input = '1024.2 + 2 * 256+66/2+-0.2';
var state = start;
for (var i of input.split('')) {
    state = state(i);
}
state(EOF);

// 语法分析
function Expression(source) {
    if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === 'EOF') {
        let node = {
            type: 'Expression',
            children: [source.shift(), source.shift()],
        };
        source.unshift(node);
        return node;
    }
    AdditiveExpression(source);
    return Expression(source);
}
function AdditiveExpression(source) {
    if (source[0].type === 'MultiplicativeExpression') {
        let node = {
            type: 'AdditiveExpression',
            children: [source[0]],
        };
        source[0] = node;
        return AdditiveExpression(source);
    }
    if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '+') {
        let node = {
            type: 'AdditiveExpression',
            operator: '+',
            children: [],
        };
        node.children.push(source.shift());
        node.children.push(source.shift());
        MultiplicativeExpression(source);
        node.children.push(source.shift());
        source.unshift(node);
        return AdditiveExpression(source);
    }
    if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '-') {
        let node = {
            type: 'AdditiveExpression',
            operator: '-',
            children: [],
        };
        node.children.push(source.shift());
        node.children.push(source.shift());
        MultiplicativeExpression(source);
        node.children.push(source.shift());
        source.unshift(node);
        return AdditiveExpression(source);
    }
    if (source[0].type === 'AdditiveExpression') return source[0];
    MultiplicativeExpression(source);
    return AdditiveExpression(source);
}
function MultiplicativeExpression(source) {
    if (source[0].type === 'Number') {
        let node = {
            type: 'MultiplicativeExpression',
            children: [source[0]],
        };
        source[0] = node;
        return MultiplicativeExpression(source);
    }
    if (source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '*') {
        let node = {
            type: 'MultiplicativeExpression',
            operator: '*',
            children: [],
        };
        node.children.push(source.shift());
        node.children.push(source.shift());
        node.children.push(source.shift());
        source.unshift(node);
        return MultiplicativeExpression(source);
    }
    if (source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '/') {
        let node = {
            type: 'MultiplicativeExpression',
            operator: '/',
            children: [],
        };
        node.children.push(source.shift());
        node.children.push(source.shift());
        node.children.push(source.shift());
        source.unshift(node);
        return MultiplicativeExpression(source);
    }
    if (source[0].type === 'MultiplicativeExpression') return source[0];

    return MultiplicativeExpression(source);
}
// debugger;
var ast = Expression(tokens);
console.log(ast);

//解释执行
function evaluate(node) {
    if (node.type === 'Expression') {
        return evaluate(node.children[0]);
    }
    if (node.type === 'AdditiveExpression') {
        if (node.operator === '-') {
            return evaluate(node.children[0]) - evaluate(node.children[2]);
        }
        if (node.operator === '+') {
            return evaluate(node.children[0]) + evaluate(node.children[2]);
        }
        return evaluate(node.children[0]);
    }
    if (node.type === 'MultiplicativeExpression') {
        if (node.operator === '*') {
            return evaluate(node.children[0]) * evaluate(node.children[2]);
        }
        if (node.operator === '/') {
            return evaluate(node.children[0]) / evaluate(node.children[2]);
        }
        return evaluate(node.children[0]);
    }
    if (node.type === 'Number') {
        return Number(node.value);
    }
}
var output = evaluate(ast);
console.log(output);
