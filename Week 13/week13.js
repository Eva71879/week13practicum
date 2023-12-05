//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date ();
console.log(currentDate); // показывает текущие дату и время

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

const birthday = new Date (currentYear, 11, 21);
console.log(birthday); 

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 1) + futureDate.setDate(futureDate.getDate() + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

console.log(Math.floor((futureDate - currentDate) / (1000 * 60 * 60 * 24) % 30));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(Math.floor((currentDate - pastDate) / (1000 * 60 * 60 * 24) % 30));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

const nextWeek = new Date ();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
let options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(nextWeek));
console.log(new Intl.DateTimeFormat("ru-RU", options).format(nextWeek));

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = (new Date().getFullYear() + 5);
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

const futureDateInFutureYear = new Date ();
futureDateInFutureYear.setFullYear((birthday.getFullYear() + 1), [birthday.getMonth()], [birthday.getDate()]);
console.log(futureDateInFutureYear);


//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

const timeStapm = Date.parse(strDate);
console.log(timeStapm);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const wrongDate = '2023/06/15';
let parseWrongDate = new Date(Date.parse(wrongDate));

if (typeof parseWrongDate == "NaN") {
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log('число ' + number + ' положительное');
} else {
    console.log('число ' + number + ' не положительное');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number %2 === 0) {
    console.log('число ' + number + ' четное');
} else {
    console.log('число ' + number + ' нечетное');
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number %3 === 0) {
    console.log('число ' + number + ' кратно 3');
} else {
    console.log('число ' + number + ' некратно 3');
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

// if (number <= 9) {
//     console.log('число ' + number + ' однозначное');
// } else {
//     console.log('число ' + number + ' многозначное');
// }

// вариант Кота:
if (number.toString().length === 1) {
    console.log(`${number} - однозначное`);
} else {
    console.log('число ' + number + ' многозначное');
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

// if (number >=10 && number <=99) {
//     console.log('число ' + number + ' двузначное');
// } else {
//     console.log('число ' + number + ' не двузначное');
// }

// вариант Кота
if (number.toString().length === 2) {
    console.log (`${number} - двузначное`)
} else {
    console.log('число ' + number + ' не двузначное');
}


//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

if (number >0) {
    console.log('число ' + number + ' положительное');
} else if (number === 0) {
    console.log('число ' + number + ' равно нулю');
}
else {
    console.log('число ' + number + ' отрицательное');
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (number %5===0 || number %7===0) {
    console.log('число ' + number + ' кратно 5 или 7');
} else {
    console.log('число ' + number + ' не кратно 5 или 7');
}
//или
if (number %5===0 && number %7===0) {
    console.log('число ' + number + ' кратно 5 и 7');
} else if (number %5===0) {
    console.log('число ' + number + ' кратно 5');
} else if (number %7===0) {
    console.log('число ' + number + ' кратно 7');
} else {
    console.log('число ' + number + ' не кратно ни 5, ни 7');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number <0) {
    console.log('число ' + number + ' отрицательно');
} else if (number === 0) {
    console.log('число ' + number + ' равно нулю');
}
else {
    console.log('число ' + number + ' положительное');
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

// if (number >99 && number<999) {
//     console.log('число ' + number + ' трехзначное');
// } else {
//     console.log('число ' + number + ' не трехзначное');
// }
// вариант Кота
if (number.toString().length===3) {
    console.log(`${number} - трехзначное`);
} else {
    console.log('число ' + number + ' не трехзначное');
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).


let dayWeek = 7;
let dayName;

switch (dayWeek) {
    case 1 :
        dayName = 'Понедельник';
        break;
    case 2 :
        dayName = 'Вторник';
        break;
    case 3 :
        dayName = 'Среда';
        break;
    case 4 :
        dayName = 'Четверг';
        break;
    case 5 :
        dayName = 'Пятница';
        break;
    case 6 :
        dayName = 'Суббота';
        break;
    case 7 :
        dayName = 'Воскресенье';
        break;
    default :
        dayName = 'Неизвестный день недели';
}
console.log(dayName);


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        fullName = 'Север';
        break;
    case 'S':
        fullName = 'Юг';
        break;
    case 'E':
        fullName = 'Восток';
        break;
    case 'W':
        fullName = 'Запад';
        break;
    default:
        fullName = 'Недопустимое значение';
}
console.log(fullName);