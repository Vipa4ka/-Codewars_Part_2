function nicknameGenerator(name) { 
    if (name.length < 4) {
        return "Error: Name too short"
    } else if (name[2] === "a" || name[2] === "e" || name[2] === "i" || name[2] === "o" || name[2] === "u") {        
        return name.slice(0, 4)
    } else {
        return name.slice(0, 3)
    }
};




// console.log(nicknameGenerator("Jimmy"));
// console.log(nicknameGenerator("Sam"));
// console.log(nicknameGenerator("Kayne"));
console.log(nicknameGenerator("Jeannie"));



// Генератор псевдонимов

// Напишите функцию, nicknameGeneratorкоторая принимает имя строки в качестве аргумента
//  и возвращает первые 3 или 4 буквы в качестве псевдонима.

// Если 3-я буква согласная, верните первые 3 буквы.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// Если 3-я буква гласная, верните первые 4 буквы.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// Если строка содержит менее 4 символов, вернуть "Ошибка: имя слишком короткое".

// Примечания:

// Гласные "aeiou", так что не обращайте внимания на букву "y".
// Ввод всегда будет строкой.
// При вводе первая буква всегда будет заглавной, а остальные строчными (например, Сэм).
// Вход можно изменить