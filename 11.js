function myLanguages(results) {    
    return Object.keys(results).sort((w, u) => results[u] - results[w]).filter(i => results[i]>=60) 
    }

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));



// Задача
// Вам предоставляется словарь / хэш / объект, содержащий несколько языков и результаты вашего теста на данных языках.
//  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания результатов.

// Примечание: баллы всегда будут уникальными (поэтому не будет повторяющихся значений).

// Примеры
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []