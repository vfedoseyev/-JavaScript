
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
let arrayOfDigits = getArrayOfDigits(number);
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