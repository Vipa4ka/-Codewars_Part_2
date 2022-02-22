function check(str, bracketsConfig) {
    let list = [];
    // let arr = [];
    let pt = [];
    let arrСlosingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
        '|': '|'
    }

    // arr.push(str, bracketsConfig)
 
    

    // function res(a, c) {  
        
    console.log(trp(str));
    console.log(trp(bracketsConfig));
    
    trp(str)
    trp(bracketsConfig)
        
    if ((trp(str) === true && trp(bracketsConfig) === true)) {
        return true
    } else {
        return false
    }
    // (trp(a) && trp(c)) ? true :false
        
    // }

    function trp(arr) {
        console.log(arr);
        
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
            stringСonversion(arr[i]);
        }

        function stringСonversion(ee) {
            // console.log(ee)
            if (typeof ee != 'string') {
                ee.map(r => {
                    stringСonversion(r)
                })
            } else {
                list.push(ee)
            }
        }
        // console.log(list)
    
        let gt = list.join('').toString();
        // console.log(gt);

        for (let i = 0; i < gt.length; i++) {
            let current = gt[i];
            // console.log(pt);
            if (uti(current)) {
                if (arrСlosingBrackets[current] != pt.pop()) return false;
            
                    
                } else {
                    pt.push(current)
                }
                
            }
            // console.log(pt);
            function uti(el) {
                let closingBrackets = ['}', ')', ']', '|']
                return closingBrackets.indexOf(el) > -1;
            }
            console.log(pt.length);
            console.log(pt);
        
            if (pt.length === 0) {
                return true
            } else {
                return false
            }
        }
        // return res(str, bracketsConfig)
    }
// }

// check([['(', ')'], ['[', ']']]) // -> true
// console.log(check('[(])', [['(', ')'], ['[', ']']])) // -> false
// console.log(check('()', [['(', ')']])); // -> true
// console.log(check('())(', [['(', ')'], ['[', ']'], ['{', '}']]));// -> false
console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))',  [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']])); // -> true
// console.log(check());
// console.log(check());

// console.log(check('((()))()', [['(', ')']])) // -> true
// console.log(check('())(', [['(', ')']])) // -> false
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false