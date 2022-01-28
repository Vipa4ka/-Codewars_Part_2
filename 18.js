function vowelOne(s) {
    let ss=s.toLowerCase();
    let q=[]
    for (let i = 0; i < s.length; i += 1){
     if (ss[i] === "a" || ss[i] === "e" || ss[i] === "i" || ss[i] === "o" || ss[i] === "u") {         
         q.push(Number(1))         
     } else {
          q.push(Number(0))
        }         
    }
return q.join('')      
  }


console.log(vowelOne("abceios"));
console.log(vowelOne("vowelOne"));


// function vowelOne(s){
//   return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
// }



// гласныйОдин
// Напишите функцию, которая принимает строку и выводит строки из 1 и 0, где гласные становятся 1, а не гласные — 0.

// Должны быть включены все негласные, включая небуквенные символы (пробелы, запятые и т. д.).

// Примеры:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"