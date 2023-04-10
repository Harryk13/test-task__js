/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function validation(val) {
    if (typeof val !== 'number') {
        throw new TypeError(`Value ${val} is not a number`);
    }
}

let postpone = (start, end, timeDelay) => {
    validation(start);
    validation(end);

    const arr = [];

    let startVal = start;


    if (start < end) {
        for (let = startVal; startVal <= end; startVal++) {
            arr.push(startVal)
        }
    }

    if (start > end) {
        for (let = startVal; startVal >= end; startVal--) {
            arr.push(startVal)
        }
    }


    let iter = 0;
    let step = setTimeout(function count() {
        console.log(arr[iter++]);
        step = setTimeout(count, timeDelay);

        if (iter === arr.length) {
            clearTimeout(step);
        }
    }, timeDelay);




}

postpone(1, 3, 1000);
// 1
// 2
// 3


postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;