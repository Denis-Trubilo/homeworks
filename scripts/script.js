/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

// console.log('aaa@bbb@ccc'.replace(/@/g, '!'));


/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

// let date = '2025-12-31';
// console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));


/*3. Дана строка «Я учу javascript!». Вырежьте из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

/*let str = 'Я учу javascript!';

a = str.substring(0, 1);
b = str.substring(16, 17);
console.log(a + ' ' + b);

c = str.substr(0, 1);
d = str.substr(16, 17);
console.log(c + ' ' + d);

x = str.slice(0, 1);
y = str.slice(16, 17);
console.log(x + ' ' + y);*/


/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

// arr = [4, 2, 5, 19, 13, 0, 10];
// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3)
// }
// console.log(Math.sqrt(sum));


/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

/*let a = 3;
let b = 5;
let c = Math.abs(a - b);
console.log(c);*/


/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

/*let dateNow = new Date();
const dateFunc = function(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}
console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' ' + dateFunc(dateNow.getDate()) + ':' + dateFunc(dateNow.getMonth()) + ':' + dateNow.getFullYear());*/


/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/

/*let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab{1,}a/g));*/

/*8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

/*let phone = '+375-29-333-33-22';

const userPhone = function (phone) {
    let regexp = /^[+]?[0-9]{1,4}[\s]?[(|-]?[0-9]{1,4}[)|-]?[\s]?[0-9]{1,3}[\s]?[\ |-]?[0-9]{1,2}[\s]?[\ |-]?[0-9]{1,2}/;
    rightPhone = (regexp.test(phone));
    if (rightPhone) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}
userPhone(phone);*/
