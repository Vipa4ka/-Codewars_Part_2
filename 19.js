function killer(suspectInfo, dead) {    
    var names = {};
    Object.keys(suspectInfo).forEach(i => {
        names[i] = 0;
        suspectInfo[i].forEach(p => {
            dead.includes(p)?names[i] += 1 :0
        })    
    })
    return Object.keys(names).sort((a, b) => names[b]-names[a])[0]
}








console.log(killer({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
},
    ['Lucas', 'Bill']));


// console.log(killer({
//     'Brad': [],
//     'Megan': ['Ben', 'Kevin'],
//     'Finn': []
// }, ['Ben']));
    


// Кто убийца?
// Некоторые люди были убиты!
// Вам удалось сузить круг подозреваемых до нескольких человек. К счастью, вы знаете всех, кого подозреваемые видели в день убийства.

// Задача.
// Дан словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// а также список имен погибших людей:

// ['Lucas', 'Bill']
// вернуть имя одного убийцы, в нашем случае, 'James'потому что он единственный человек, который видел и то, 'Lucas'и другое.'Bill'