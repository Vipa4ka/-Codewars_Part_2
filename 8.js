function findMissing(arr1, arr2) {    
    let a = arr1.sort((w, u) => w - u);
    let b = arr2.sort((w, u) => w - u);
    for (let i = 0; i < a.length; i += 1){
        if (a[i] != b[i]){
            return a[i]
        }
    }   
}





console.log(findMissing([1, 2, 3], [1, 3]));


// Даны два целочисленных массива, где второй массив представляет собой перетасованный дубликат первого массива
//  с отсутствующим одним элементом, найдите отсутствующий элемент.

// Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном,
//     а не в другом, не является допустимым решением.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// Первый массив всегда будет иметь хотя бы один элемент.