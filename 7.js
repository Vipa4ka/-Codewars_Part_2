function nbDig(n, d) {
    let k = '';
    for (let i = 0; i <= n; i += 1){
        k += i ** 2;    }
    return k.split('').filter(a =>
        Number(a) === d
    ).length;    
}

console.log(nbDig(10, 1));
console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));



// Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.

// Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.

// Подсчитайте количество цифр, dиспользованных при написании всех k**2.

// Вызовите nb_dig(или nbDig или...) функцию, принимающую nи dв качестве параметров и возвращающую это количество.

// Примеры:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Обратите внимание, что 121имеет удвоенную цифру 1.