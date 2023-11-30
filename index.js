
// №1

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

function checkNegative(number) {
    if (number < 0) {
        // console.log('Число отрицательное');
    } else if (number === 0) {
        // console.log('Число равно нулю');
    } else {
        // console.log('Число положительное');
    }
}

// №2

// Дана строка. Выведите в консоль длину этой строки.

function checkLength(str) {
    console.log(str.length);
}

// checkLength("str")

// №3

// Дана строка. Выведите в консоль последний символ строки.

function printLastCharacter(str) {
    if (str.length > 0) {
        console.log(str[str.length - 1]);
    } else {
        console.log("Строка пуста");
    }
}

// printLastCharacter("kjhg")

// №4

// Дано число. Проверьте, четное оно или нет.

function checkNumber(num) {
    if (typeof num === 'number' && !isNaN(num)) {
        (num % 2 === 0) ? console.log('Число четное') : console.log('Число нечетное');
    } else {
        console.log('Это не число');
    }
}

// №5

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

function checkFirstLetter(str1, str2) {
    if (str1[0] === str2[0]) {
        console.log('Первые буквы совпадают');
    } else {
        console.log('Первые буквы не совпадают');
    }
}

// checkFirstLetter('ljhgohg', 'ltdszfdgc')

// №6

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function getLastLetter(str) {
    if (str.length > 0) {
        if (str[str.length - 1] === 'ь') {
            console.log(str[str.length - 2]);
        } else {
            console.log(str[str.length - 1]);
        }
    } else {
        console.log('Строка пуста');
    }
}

// getLastLetter('Медведь')
// getLastLetter('Привет')


// №1

function firstNumber(num) {
    let strNum = num.toString();
    let firstDigit = parseInt(strNum[0]);
    console.log(firstDigit);
}

// firstNumber(456); 
// firstNumber(12345); 


// №2

// Дано число. Выведите в консоль последнюю цифру этого числа.

function lastNumber(num) {
    let strNum = num.toString();
    let lastDigit = parseInt(strNum[strNum.length - 1]);
    console.log(lastDigit);
}


// №3

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

function firstAndLastNumberSum(num) {
    let strNum = num.toString();
    let firstDigit = Number(strNum[0]);
    let lastDigit = Number(strNum[strNum.length - 1]);
    console.log(firstDigit + lastDigit);
}

// №4

// Дано число. Выведите количество цифр в этом числе.

function lengthOfNumber(num) {
    let strNum = num.toString();
    let strNumLength = strNum.length;
    console.log(strNumLength);
}


// №5

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.


function checkFirstNumber(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length > 0 && strNum2.length > 0) {
        if (strNum1[0] === strNum2[0]) {
            console.log('Первые цифры совпадают');
        } else {
            console.log('Первые цифры не совпадают');
        }
    } else {
        console.log('Одно из чисел не содержит цифр');
    }
}

// №1

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

function lastStringLetter(str) {
    (str.length > 1) ? console.log(str[str.length - 2]) : console.log('Строка отсутствует');
}

// №2

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

function checkDivision(num1, num2) {
    if (num2 !== 0) {
        (num1 % num2 === 0) ? console.log('good') : console.log('not good');
    } else {
        console.log('На ноль делить нельзя');
    }
}


// №1

// Выведите в консоль все целые числа от 1 до 100.

for (i = 1; i <= 100; i++) {
    // console.log(i);
}

// №2

// Выведите в консоль все целые числа от -100 до 0.

for (i = -100; i <= 0; i++) {
    // console.log(i);
}

// №3

// Выведите в консоль все целые числа от 100 до 1.

for (i = 100; i >= 1; i--) {
    // console.log(i);
}

// №4

// Выведите в консоль все четные числа из промежутка от 1 до 100.

for (i = 100; i >= 1; i--) {
    // console.log(i);
}
// №5

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

for (i = 1; i <= 100; i++) {
    // (i % 3 === 0) ? console.log(i) : null
}

// №1

// Найдите сумму всех целых чисел от 1 до 100.
let result = 0
for (i = 1; i <= 100; i++) {
    result += i
}
// console.log(result);

// №2

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

let result2 = 0
for (i = 1; i <= 100; i++) {
    (i % 2 === 0) ? result2 += i : null
}
// console.log(result2);

// №3

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

let result3 = 0
for (i = 1; i <= 100; i++) {
    (i % 2 > 0) ? result3 += i : null
}
// console.log(result3);

// №4

// Даны два целых числа. Найдите остаток от деления первого числа на второе.

function findRemainder(a, b) {
    let c = a % b
    // console.log(c);
    return c
}
// findRemainder(6, 4)

// №5

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

a = 'asdfghjkl'
b = a.length
for (i = a.length - 1; i >= 0; i--) {
    // console.log(a[i]);
}

// №1

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let res = sumOfSquares(numbers);
// console.log(res); 


// №2

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.sqrt(arr[i]);
    }
    return sum;
}

let numbersSqrt = [1, 2, 3, 4, 5];
let resSqrt = sumOfSquares(numbersSqrt);
// console.log(resSqrt); 

// №3

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i];
        } else {
            console.log('Элемент с отрицательным значением найден:', arr[i]);
        }
    }
    return sum;
}

let n = [1, 2, 3, 4, 5];
let r = sumOfSquares(n);
// console.log(r); 

// №4

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

function sumInRange(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < 10) {
            sum += arr[i];
        } else {
            console.log('Элемент с недопустимым значением найден:', arr[i]);
        }
    }
    return sum;
}

let numbersInRange = [1, 2, 3, 4, 5];
let resultInRange = sumInRange(numbersInRange);
// console.log(resultInRange);

// №1

// Дана строка:

// 'abcde'
// Получите массив букв этой строки.

let getStrArray = (str) => {
    return str.split('');
}

let str = 'abcde';
let arrLetters = getStrArray(str);
// console.log(arrLetters); 

// №2

// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.

let getStrArrayNum = (num) => {
    return Array.from(String(num), Number);
}
let number = 12345;
let arrayOfDigits = getStrArrayNum(number);
// console.log(arrayOfDigits); 

// №3

// Дано некоторое число:

// 12345
// Переверните его:

// 54321

let reverseNum = (num) => {
    let str = num.toString();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return Number(reversedStr);
}

// №4

// Дано некоторое число:

// 12345
// Найдите сумму цифр этого числа.

let sumNumber = (num) => {
    let str = num.toString();
    let sum = 0
    for (let i = 0; i <= str.length; i++) {
        sum += Number(str[i])
    }
    return sum
}

let nbr = 12345;
let resultSum = sumNumber(nbr);
// console.log(resultSum); 


// №1

// Заполните массив целыми числами от 1 до 10.

function fillArray(arr) {
    arr = []
    for (i = 1; i <= 10; i++) {
        arr.push(i)
    }
    return arr
}

let resultArray = fillArray();
// console.log(resultArray);


// №2

// Заполните массив четными числами из промежутка от 1 до 100.

function fillArray2() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

let resultArray2 = fillArray2();
// console.log(resultArray2);

// №3

// Дан массив с дробями:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let fractions = [1.456, 2.125, 3.32, 4.1, 5.34];

let roundedFractions = fractions.map(num => parseFloat(num.toFixed(1)));

// console.log(roundedFractions);

// №1

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let arr = ['http://www', 'https://dom', '1http://vova', 's http://its']

function filterArr(arr) {
    let filt = arr.filter(function (item) {
        return item.startsWith('http://')
    })
    return filt
}

arr = filterArr(arr)
// console.log(arr)


//№2

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr2 = ['https://code.mu/html', 'https://code.mu/.html', 'https://code.mu/.htm']

function filterArrEnd(arr) {
    let filt = arr.filter(function (item) {
        return item.endsWith('.html')
    })
    return filt
}

arr2 = filterArrEnd(arr2)
// console.log(arr2)

// №3

// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let fractions23 = [1, 2.1, 3.3, 4.1654, 5.399994];

let mul = arr => arr.map(item => item * 1.1);

let fractions2 = mul(fractions23);
// console.log(fractions2);


// №1

// Заполните массив случайными числами из промежутка от 1 до 100.

function arrRandom(arr) {
    let random = []
    for (i = 0; i < 100; i++) {
        let rand = Math.random()
        random.push(Math.round(rand))
    }
    return random
}
random = arrRandom()
// console.log(random);

// №2

// Дано некоторое число:

// 12345
// Выведите в консоль все его символы с конца.

function reverseNumber(num) {
    let numToStr = num.toString();
    let reversedStr = numToStr.split('').reverse().join('');
    return reversedStr;
}

let rev = reverseNumber(12345);
// console.log(rev);


// №3

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:

// [1, 2]
// [3, 4]
// [5, 6]

function printSubarrays(arr) {
    while (arr.length) {
        let subarray = arr.splice(0, 2);
        // console.log(subarray);
    }
}

let originalArray = [1, 2, 3, 4, 5, 6];
printSubarrays(originalArray);


// №4

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// const onetwo = [...array1, ...array2]
const onetwo = array1.concat(array2)

// console.log(onetwo);


// Часть 2

// №1

// Дана некоторая строка. Найдите позицию первого нуля в строке.

let indexOfString = (str) => {
    return str.indexOf('0')
}

let findZero = indexOfString("0lkjhgyu")
// console.log(findZero);

// №2

// Выведите в консоль все числа в промежутке от 1 до 1000, 
// сумма первой и второй цифры которых равна пяти.
for (let i = 1; i <= 1000; i++) {
    let numString = i.toString();

    if (numString.length >= 2) {
        let firstDigit = parseInt(numString[0]);
        let secondDigit = parseInt(numString[1]);

        if (firstDigit + secondDigit === 5) {
            // console.log(i);
        }
    }
}

// №3

// Дан массив. Удалите из него элементы с заданным значением.

let etochto = [1, 2, 3, 4, 5, 6];
// let valueToRemove = 3;

// let newArray = etochto.filter(item => item !== valueToRemove);

function fillArray3(arr, x) {
    let newArray = arr.filter(item => item !== x);
    return newArray
}
let sss = fillArray3(etochto, 5)
// console.log(sss);

// №4

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

let vovtakvot = [1, 2, 3, 4, 5, 6];


let halfSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i];
    }
    return sum;
}

let result5 = halfSum(vovtakvot);
// console.log(result5);


// №1

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

let vovtakvot2 = [1, -2, 3, 4, -5, 6];

function countNegativeNumbers(arr) {
    let negativeNumbers = arr.filter(item => item < 0);
    return negativeNumbers.length;
}

let kjh = countNegativeNumbers(vovtakvot2);
// console.log(kjh);


// №2

// Дан массив с числами. Оставьте в нем только положительные числа.

let vovtakvot3 = [1, -2, 3, 4, -5, 6];

function countNegativeNumbers(arr) {
    let negativeNumbers = arr.filter(item => item > 0);
    return negativeNumbers;
}

let iii = countNegativeNumbers(vovtakvot2);
// console.log(iii);

// №3

// Дана строка. Удалите предпоследний символ из этой строки.

let removeLastChar = (str) => str = str.slice(0, -1)

let iu = removeLastChar('sdfghjk')
// console.log(iu);


// №4

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

let vovtakvot4 = [1, 2, 3, 4, 5, 6];

let divHalfArr = (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum1 += arr[i];
    }
    for (let i = arr.length / 2; i < arr.length; i++) {
        sum2 += arr[i];
    }
    return sum1 + sum2;
}
let result65 = divHalfArr(vovtakvot4);
// console.log(result65);

// №1

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

function eqLetter(str1, str2) {
    (str1[str1.length - 1] === str2[0]) ? console.log('normas') : console.log('ti oshibsya');
}

// eqLetter('sfhsfijhsf', 'kdjfhbad');

// №2

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

let findThirdZero = (str) => {
    let thirdZeroIndex = str.indexOf('0', str.indexOf('0', str.indexOf('0') + 1) + 1);
    if (thirdZeroIndex !== -1) {
        console.log('Позиция третьего нуля: ' + thirdZeroIndex);
    } else {
        console.log('Третьего нуля нет в строке.');
    }
}

// findThirdZero('012340567890');

// №3

// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

let x = '12,34,56';

let numSum = (str) => {
    let numbers = str.split(',').map(Number);
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
}
// console.log(numSum(x))

// №4

// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
let today = '2025-12-31'

// let dateFormat = today.split('-')
// let date = {
//     year: dateFormat[0],
//     month: dateFormat[1],
//     day: dateFormat[2],
// }
let [year, month, day] = today.split('-');
let date = {
    year,
    month,
    day,
};
// console.log(date)

// №1

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

let netoday = 'fssfjs2025-12-31';

let firstNumber1 = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            return i;
        }
    }
    return -1; // Возвращаем -1, если цифра не найдена
};

let position = firstNumber1(netoday);
// console.log(position);

// №2

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

let date2 = {
    year: '2025',
    month: '12',
    day: '31',
}

let dateKeys = Object.keys(date2);
let dateValues = Object.values(date2);
let dateEntries = Object.entries(date2);

// console.log(dateKeys);
// console.log(dateValues);
// console.log(dateEntries);

// №3

// Дано число. Выведите в консоль количество четных цифр в этом числе.

let someNumber = 187609387098543423456789;

function countEvenDigits(num) {
    let numStr = num.toString();
    let numArr = numStr.split('').map(Number);
    let evenDigits = numArr.filter(digit => digit % 2 === 0);
    return evenDigits.length;
}

let result6 = countEvenDigits(someNumber);
// console.log(result6);

// №4

// Дана некоторая строка:

// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

// 'AbCdE'

let huiza = 'abcde';

let upperHuyapper = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
};
let lkjhgf = upperHuyapper(huiza)
// console.log(lkjhgf);

// №5

// Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'

let etoHuiza = 'aaa bbb ccc';

let etoArHu = etoHuiza.split(' ').map(item => item[0].toUpperCase() + item.slice(1));

// console.log(etoArHu.join(' '));


// №1

// Дана некоторая строка, например, вот такая:

// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

let govn = '023m0df0dfg0';

let zeroPositions = [];
for (let i = 0; i < govn.length; i++) {
    if (govn[i] === '0') {
        zeroPositions.push(i);
    }
}

// console.log(zeroPositions);

// №2

// Дана некоторая строка:

// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

// 'abdeg'

let strign = 'abcdefg';

let result7 = '';
for (let i = 0; i < strign.length; i++) {
    if ((i + 1) % 3 !== 0) {
        result7 += strign[i];
    }
}

// console.log(result7);

// №3

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

let arr13 = [1, 2, 3, 4, 5, 6];

function divideSum(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    return sumEven / sumOdd;
}

let result14 = divideSum(arr13);
// console.log(result14);


// №1

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

let etostroka = '023m0df0dfg0';
let numberPosition = [];

for (let i = 0; i < etostroka.length; i++) {
    if (!isNaN(etostroka[i])) {
        numberPosition.push(i);
    }
}

// console.log(numberPosition);

// №2

// Дан массив с некоторыми числами, например, вот такой:

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]

let arr1 = [123, 456, 789];

let reversedArr = arr1.map(num => parseInt(num.toString().split('').reverse().join('')));

// console.log(reversedArr);

// №3

// Дана некоторая строка с числом:

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'

let teststr = '1234567';
let result8 = '';

for (let i = teststr.length - 1, count = 0; i >= 0; i--) {
    result8 = teststr[i] + result8;
    count++;
    if (count === 3 && i !== 0) {
        result8 = ' ' + result8;
        count = 0;
    }
}

// console.log(result8);

// №4

// Дана некоторая строка:

// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// 'aBcDe'

let strAbC = 'AbCdE';
let newStrAbC = '';

for (let i = 0; i < strAbC.length; i++) {
    if (strAbC[i] === strAbC[i].toUpperCase()) {
        newStrAbC += strAbC[i].toLowerCase();
    } else {
        newStrAbC += strAbC[i].toUpperCase();
    }
}

// console.log(newStrAbC);

// №5

// Дан некоторый массив с числами, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:

// [12, 34, 56]


let arr21 = [1, 2, 3, 4, 5, 6];
let newarr21 = [];

for (let i = 0; i < arr21.length; i += 2) {
    if (i + 1 < arr21.length) {
        let mergedPair = Number('' + arr21[i] + arr21[i + 1]);
        newarr21.push(mergedPair);
    } else {
        newarr21.push(arr21[i]);
    }
}

// console.log(newarr21);


// №6

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'

let strABCEF = 'aaa bbb ccc eee fff';

let newABCE = strABCEF.split(' ').map((word, index) => {
    if (index % 2 !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}).join(' ');

console.log(newABCE);


// №1

// Дана некоторая строка:

// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'

let govABD = 'a bc def ghij'

