const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

    function combine() {
        var array = [].slice.call(arguments);        
        let q = {};
        array.forEach(a => {
        for (var key in a) {            
            if (key in q) {
                q[key]+= a[key];
            } else {
               q[key] = a[key]; 
            }}           
        })
    return q
};



//     function combine() {
//     let q = {};
//     [...arguments].forEach(a => {
//         for (var key in a) {            
//             if (key in q) {
//                 q[key]+= a[key];
//             } else {
//                q[key] = a[key]; 
//             }}})
//     return q
// };


console.log(combine(objA, objB));

// { a: 13, b: 20, c: 36, d: 3 }







// Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения. Объекты объединяются вместе, так что значения совпадающих ключей складываются вместе.

// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.