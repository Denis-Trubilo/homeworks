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


//----------------------------------------------

const Taxi = function () {
    let status = false;
    this.petrol = 0.1;
    this.money = 0;
    this.km = 0;
    this.speed = 100;
    let moveStart;
    let moveEnd;
    this.duration = 0;

    this.on = function () {
        if (this.petrol > 0) {
            status = true;
            console.log(`
        Автомобиль заведен
        для начала поездки воспользуйтесь командой moveTheTaxi
            `)
        } else {
            console.log(`
        В баке пусто, заправьте машину!
        (команда fillTheTaxi) 
            `)
        }
    }

    this.off = function () {
        status = false;
    }

    this.moveTheTaxi = function () {
        if (status == true) {
            if (this.petrol > 0) {
                moveStart = Date.now();
                console.log(`
        Поехали!
        что бы прекратить поездку, воспользуйтесь командой stopTheTaxi
                `);
            } else {
                status = false;
                console.log(`
        Бензин закончился, заправьте автомобиль
        (команда fillTheTaxi)
                `);
            }
        } else {
            console.log(`
        Сначала заведите автомобиль,что бы поехать
        (команда on)
            `);
        }
    }

    this.stopTheTaxi = function () {
        moveEnd = Date.now();
        console.log(`
        Поездка закончена, для расчёта результата поездки
         воспользуйтесь командой resault 
        `);
    }

    this.fillTheTaxi = function () {
        a = 2
        b = +(prompt('Сколько литров бензина вы хотите заправить? Цена 2 за 1 литр'))
        if ((b * a) < this.money) {
            this.petrol = this.petrol + b;
            this.money = this.money - (a * b);
            console.log(`
            Автомобиль заправлен, в баке ${(Math.ceil(this.petrol * 100) / 100)} литров бензина
            На вашем балансе осталось ${(Math.ceil(this.money * 100) / 100)}
            `);
        } else {
            console.log(`
        У вас недостаточно средств для заправки, введите другое
        количество литров
        (информацию о баллансе можно посмотреть в info)
        `);
        }
    }

    this.resault = function () {
        this.startTime = moveStart ? new Date(moveStart) : 0;
        this.endTime = moveEnd ? new Date(moveEnd) : 0;

        if (moveStart && moveEnd) {
            this.duration = moveEnd - moveStart;
            this.duration = this.duration / 1000;
        }
        this.km = this.speed * (this.duration / 3600);
        this.petrol = this.petrol - (0.1 * this.km);
        this.money = this.money + (2 * this.km);
        console.log(`
        Итоги расчитаны, для просмотра результата о поездке 
        и текущем состоянии Такси можно узнать по команде info
        `)
    }

    this.info = function () {
        console.log(`
        Автомобиль заведен: ${status};
        Бензин в баке: ${(Math.ceil(this.petrol * 100) / 100)};
        Балланс денег: ${(Math.ceil(this.money * 100) / 100)};
        Начало поездки: ${this.startTime};
        Окончание поездки: ${this.endTime};
        Время поездки: ${(Math.ceil(this.duration * 100) / 100)} секунд;
        Расстояние: ${(Math.ceil(this.km * 100) / 100)} км;
        `)
    }
}

let taxi = new Taxi();
console.log(taxi);