const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
    let l = [];
    let kk = [];
    let v = [];
    let gf = [];
    let r = expr.match(/.{1,10}/g);  //разбила по 10 шт
    // console.log(r)     
    for (let i = 0; i < r.length; i++) {
        r[i] === '**********' ? kk.push(' ') : kk.push(r[i]); //заменила ******** на пробел    
        gf.push(kk[i].match(/.{1,2}/g)); //разбила каждый массив по 2 элем



    }
    console.log(gf)

    //     gf.map((m, k) => {
    //         m.map(j => {
    //             if (j === '10') {
    //         j = '.';
    //         v.push(j)
    //         // console.log(g[i])
    //     } else if (j === '11') {
    //                 j = '-';
    //                 v.push(j)
    //     }
    //         })
    //         console.log(v)
    // })
    // console.log(gf) // массив с заменой



    // for (let i = 0; i < kk.length; i++) {
    //     let g = kk[i].match(/.{1,2}/g); //разбила каждый массив по 2 элем    
    //     // console.log(g[i])
    //     if (g[i] === '10') {
    //         g[i] = '.';
    //         // v.push(g[i])
    //         // console.log(g[i])
    //     } else if (g[i] === '11') {
    //         g[i] = '-';
    //     }
    //     v.push(g[i])
    //     //  console.log(v)
    // }
    // g.map(d => {
    //     // console.log(ds);
    //     if (d === '10') {
    //         d = '.';
    //         v.push(d)
    //         // console.log(d)
    //     }
    //     if (d === '11') {
    //         d = '-';
    //         v.push(d)
    //     }
    //     // v.push(d)
    // })
    // }
    // if (c === '10') {
    //     c = '.';
    // console.log(v)
    // }

    // console.log(g)
    // let c = g.filter(i => i != 0)
    // console.log(c)
    // if (c === '10') {
    //     c = '.';
    //     console.log(c)
    // }








    // console.log(r[i]);
    // console.log(r[i].split('00'))

    // console.log(r[i])




    // let g = r[i].match(/.{1,2}/g)
    // for (let i = 0; i < g.length; i++) {
    //     // console.log(g[i])
    //     if (g[i] === '10') {
    //         l.push('.')

    //     } else if (g[i] === '11') {
    //         l.push('-')
    //     } else if (g[i] === '00') {
    //         l.push('')
    //     }
    //     let h = l[i].match(/.{1,5}/g)
    //     // console.log(h)
    // }
    // }
    console.log(r[0])

}
(decode(expr))

// console.log(decode(expr));
