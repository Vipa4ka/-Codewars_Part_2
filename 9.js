function getDecimal(n) {
    return Math.abs(n % 1);
}

console.log(getDecimal(10));
console.log(getDecimal(-0.2));




// Напишите функцию, которая возвращает только десятичную часть заданного числа.

// Вам нужно обрабатывать только действительные числа, а не Infinity, NaNили подобные. 
// Всегда возвращайте положительную десятичную часть.

// Примеры
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2