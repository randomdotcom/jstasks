'use strict';

function First() {
    let n = parseInt(prompt('Задайте N:'));
    let simpleNums = [];
    for (let i = 2; i < n; i++) {
        if (isSimple(i)) simpleNums.push(i);
    }
    alert('Простые числа до N: ' + simpleNums.toString());
}

function Second() {
    let n = parseInt(prompt('Задайте N:'));
    let simpleNums = [];
    let i = 2;
    while (simpleNums.length<n) {
        if (isSimple(i)) {
            simpleNums.push(i);
        }
        i++;
    }
    alert('Простые числа до N: ' + simpleNums.toString());
}


///////////////////////////////////////
function isSimple(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
}