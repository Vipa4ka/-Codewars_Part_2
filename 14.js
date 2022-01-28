function isPowerOfTwo(n) {    
    if (n >= 1 || n===0) {
        if (Math.abs(Math.log2(n) % 1) ===0) {
            return true;             
    } else {
        return false;
    }
    } else {
      return false;  
    }       
}

console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));






// Завершите функцию power_of_two / powerOfTwo(или эквивалентную, в зависимости от вашего языка),
//     которая определяет, является ли заданное неотрицательное целое число степенью двойки.Из соответствующей записи в Википедии:

// степень двойки — это число вида 2 n, где n — целое число, то есть результат возведения
//  в степень с числом два в качестве основания и целым числом n в качестве показателя степени.

// Вы можете предположить, что ввод всегда действителен.

// Примеры
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Остерегайтесь некоторых граничных случаев — например, 1это степень, 2поскольку 2^0 = 1и 0не является степенью 2.