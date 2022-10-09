//Задача 1
/*
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

if (a > b) {
	document.write('Число а больше b');
} else if (a < b) {
	document.write('Число а меньше b');
} else {
	document.write('Числа а и b равны');
}
*/
//Задача№2
/*
let firstDistance = Number(prompt('Введите первое расстояние'));
let secondDistance = Number(prompt('Введите второе расстояние'));

let changeFirstDistance = firstDistance * 1000;
let changeSecondDistance = secondDistance * 0.305;

if (changeFirstDistance > changeFirstDistance) {
	document.write('Второе расстояние МEНЬШE первого');
} else if (changeFirstDistance < changeFirstDistance) {
	document.write('Второе расстояние БОЛЬШE первого');
} else {
	document.write('Расстояния равны');
}
*/
//Задача№3
/*
let firstData = Number(prompt('Введите первое число'));
let secondData = Number(prompt('Введите второе число'));

if (secondData % firstData === 0) {
	document.write('Первое число является делителем ');
} else if (firstData % secondData === 0) {
	document.write('Второе число является делителем ');
} else {
	document.write('Оба числа не являются делителями ');
}
*/
//Задача 4
/*
let firstNumber = Number(prompt('Введите число'));

let newNumber = firstNumber % 10;
if (firstNumber % 2 === 0) {
	document.write('Число заканчивается четной цифрой', newNumber);
} else {
	document.write('Число заканчивается Нечетной цифрой', newNumber);
}
*/
//Задача№5
/*
let firstNumber = Number(prompt('Введите двузначное число'));

let truFirstNumber = firstNumber % 10;
let number = (firstNumber - truFirstNumber) / 10;

if (truFirstNumber < number) {
	document.write('Первое число больше второго');
} else if (truFirstNumber > number) {
	document.write('Bторое число больше первого');
} else {
	document.write('Числа равные');
}
*/
//Задача№6
/*
let number = Number(prompt('Введите трехзначное число'));

let lastNumber = number % 10;
let middleNumberOne = ((number - lastNumber) / 10) % 10;
let firstNumber = ((number - lastNumber - (middleNumberOne * 10)) / 100);

let sumNumber = lastNumber + middleNumberOne + firstNumber;

if (sumNumber % 2 === 0) {
	document.write('Cумма чисел четная');
} else {
	document.write('Cумма чисел Нечетная');
}

if (sumNumber % 5 === 0) {
	document.write('Число кратное 5');
} else {
	document.write('Число Некратное 5');
}

let multiplication = lastNumber * middleNumberOne * firstNumber;
if (multiplication > 100) {
	document.write('Число больше 100');
} else if (multiplication === 100) {
	document.write('Число равно 100');
} else {
	document.write('Число меньше 100');
}
*/
//Задача№7
/*
let number = Number(prompt('Введите трехзначное число'));

let lastNumber = number % 10;
let middleNumberOne = ((number - lastNumber) / 10) % 10;
let firstNumber = ((number - lastNumber - (middleNumberOne * 10)) / 100);

if (firstNumber === middleNumberOne && middleNumberOne === lastNumber) {
	document.write('Все числа равны');
} else {
	document.write('Числа НE равны');
}

if (firstNumber === middleNumberOne) {
	document.write('Первое и второе число одинаковое');
} else if (middleNumberOne === lastNumber) {
	document.write('Второе и третье число одинаковое');
} else if (lastNumber === firstNumber) {
	document.write('Третье и первое число одинаковое');
} else {
	document.write('Числа НE одинаковые');
}
*/
//Задача№8
/*
let number = Number(prompt('Введите шестизначное число'));

let sixNumber = number % 10;
let fiveNumber = ((number - sixNumber) / 10) % 10;
let fourNumber = ((number - sixNumber - (fiveNumber * 10)) / 100 % 10);
let threeNumber = ((number - sixNumber - (fiveNumber * 10) - (fourNumber * 100)) / 1000 % 10);
let twoNumber = ((number - sixNumber - (fiveNumber * 10) - (fourNumber * 100) - (threeNumber * 1000)) / 10000 % 10);
let oneNumber = ((number - sixNumber - (fiveNumber * 10) - (fourNumber * 100) - (threeNumber * 1000) - (twoNumber * 10000)) / 100000);

if (sixNumber === oneNumber && fiveNumber === twoNumber && fourNumber === threeNumber) {
	document.write('Числа зеркальные');
} else {
	document.write('Числа НE зеркальные');
}
*/