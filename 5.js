function colourAssociation(array){
    let q = [];
    for (let i = 0; i < array.length; i++){       
        q.push({ [array[i][0]] : array[i][1] })        
    }
    return q
}

// function colourAssociation(array){
//   return array.map(x => ({ [x[0]]: x[1]}));
// }

console.log(colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"]
]));












// Цвет играет важную роль в нашей жизни.Большинству из нас этот цвет нравится больше, чем другой. 
// Специалисты по пользовательскому опыту считают, что определенные цвета имеют для нас определенное психологическое значение.

// Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации в каждом элементе массива.
//     Функция, которую вы напишете, должна возвращать цвет как «ключ» и ассоциацию как «значение».

// Например:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]