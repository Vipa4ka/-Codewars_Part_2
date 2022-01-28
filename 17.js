function spread(func, args) {
   return func(...args);  
}   

console.log(spread(function(x,y){return x+y}, [1,2]));






// Вы должны создать функцию spread, которая принимает функцию и список аргументов, которые должны быть применены к этой функции.
//  Вы должны заставить эту функцию возвращать результат вызова данной функции / лямбды с заданными аргументами.

// например:

// spread(someFunction, [1, true, "Foo", "bar"] ) 
// // is the same as...
// someFunction(1, true, "Foo", "bar")