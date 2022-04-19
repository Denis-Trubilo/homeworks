// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

// let Teapot = function () {
//     this.get = function () {
//         this.w = +prompt('Введите мощность нагревательного элемента в чайнике, кВТ');
//         this.v = +prompt('Введите объем воды налитой в чайник, л');
//         this.oper = confirm('Включите или выключите чайник: ВКЛ или ВЫКЛ');
//         this.operation();
//     };
//     this.operation = function () {
//         if (this.oper) {
//             this.result = (0.00117 * this.v * (100 - 20) / this.w);
//         } else {
//             this.result = 0;
//             alert('Включите чайник, что бы вода закипела');
//         }

//         this.show();
//     };
//     this.show = function () {
//         if (this.result < 1) {
//             this.resultMin = this.result * 60;
//             alert('Время закипания чайника: ' + this.resultMin + ' минут');
//         } else {
//             alert('Время закипания чайника: ' + this.result + ' часов');
//         }

//     };
// };

// let teapot = new Teapot();
// teapot.get();