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

function Third() {
    let n = parseInt(prompt('Задайте N:'));
    let num = 1;
    let prev = 1;
    let prevprev = 1;
    let sum = 0;
    while (n != 0) {
        let temp = num;
        num = prev+prevprev;
        prevprev = prev;
        prev = temp;
        if (num % 2 == 0)  {
            sum += num;
            n--;
        }
    }
    alert('Сумма первых n чисел фибонначи: ' + sum);
}

function Fourth() {
    let n = parseInt(prompt('Задайте N:'));
    let num = 0;
    for (let i = 0; i <= n; i++) {
        num += Math.pow(i,i);
    }
    num=num.toString();
    alert(num.substring(num.length-10, num.length));
}

function Fifth() {
    let mas = prompt('Задайте массив чисел через пробел: ');
    mas = mas.split(' ');
    let sum = 0;
    for (let i = 0; i < mas.length; i++) {
        sum += parseInt(mas[i]);
    }
    alert(sum/mas.length);
}

function Sixth() {
    let mas = prompt('Задайте массив чисел через пробел: ');
    mas = mas.split(' ');
    let max = mas[0];
    for (let i = 1; i < mas.length; i++) {
        if (max < mas[i]) max = mas[i];
    }
    alert('Максимальный элемент массива: ' + max);
}

function Seventh() {
    let mas = prompt('Задайте массив строк через пробел: ');
    mas = mas.split(' ');
    let resultMas = [];
    for (let i = 0; i < mas.length; i++) {
        if (!resultMas.includes(mas[i])) resultMas.push(mas[i])
    }
    alert(resultMas);
}

function Eighth(){
    let word = prompt('Введите слово: ');
    let flag = word === word.split('').reverse().join("");

    alert(flag?'Палиндром':'Не палиндром');
}

function Ninth() {
    let number = prompt('Введите число: ').toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    alert('Сумма цифр числа = '+sum);
}
///////////////////////////////////////
function isSimple(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
}