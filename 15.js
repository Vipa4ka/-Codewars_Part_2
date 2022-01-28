function sentence(List) {   

    return List.sort((a, b) => Object.keys(a) - Object.keys(b)).map(item => {
        return Object.values(item).join();        
    }).join(' ')
}


let List = [
            {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
           ];


console.log(sentence(List));




// Входными данными будет массив словарей.

// Возвращает значения в виде предложения, разделенного строками, в порядке целочисленного эквивалента их ключей (в порядке возрастания).

// Ключи не повторяются, и их диапазон равен -999 < key < 999. Ключи и значения словарей всегда будут строками и не будут пустыми.

// Пример
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'