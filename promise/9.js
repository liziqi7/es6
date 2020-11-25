// 红绿灯;
var count = 0,
    iTime;
function sleep(bg, duration) {
    count = 1;
    document.getElementById('js-box').innerText = count;
    document.getElementById('js-box').style.backgroundColor = bg;
    if (iTime) {
        clearInterval(iTime);
    }
    iTime = setInterval(function () {
        count++;
        document.getElementById('js-box').innerText = count;
    }, 1000);
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration);
    });
}

async function foo() {
    while (true) {
        await sleep('green', 3000);
        await sleep('yellow', 1000);
        await sleep('red', 2000);
    }
    console.log('end');
}
foo();
