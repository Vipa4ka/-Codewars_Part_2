let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
    }];
   
questions.map(a => a.usersAnswer = null);
console.log(questions);


// Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions. 
// Значение usersAnswerдолжно быть установлено равным null.Решение должно работать для массива любой длины.