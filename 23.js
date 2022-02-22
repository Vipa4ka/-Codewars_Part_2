

function toReadable(number) {
  let a = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let b = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let c = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let f = number.toString();  
    let x=[]
    
    if (number === 0) {
        x.push('zero')
         x.push(a[0])
    } else if (number < 20) {
        for (let i = 0; i < a.length; i++) {
            x.push(a[number])
            x.push(a[0])
            break;
        }
    } else if (number < 10) {
        console.log(number)
        for (let i = 0; i < a.length; i++) {
            x.push(a[number])
            x.push(a[0])
            break;
        }
    }
    else {
        for (let i = 0; i < f.length; i++) {
            let d = f[i] * Math.pow(10, f.length - i - 1);
            console.log( d);
            
            if (d === 0) {
                x.push(a[0])
            } else if (d < 20) {
                console.log(f[i]);
                
                d = f[i];
                for (let i = 0; i < a.length; i++) {
                    // console.log(a[0]);
                    
                    x.push(a[d])
                    x.push(a[0])

                    // x += a[d]+' '
                    break;
                }
            }    else if (d < 100) {
                for (let i = 0; i < b.length; i++) {
                    x.push(b[d / 10 - 1])
                    // x += (b[d / 10 - 1])+' ' 
                    break;
                }
            } else {
                for (let i = 0; i < c.length; i++) {
                    x.push(c[d / 100])
                    // x += (c[d / 100])+' '  
                    break;
                }            
            }
        }        
    }    
    // let hh = x.split('')
    // hh.pop()
    // return hh.join('')
    x.pop()
    // console.log(x)

    
    return x.join(' ')
}


// toReadable(348)
console.log(toReadable(919));
console.log(toReadable(21));
console.log(toReadable(6));
console.log(toReadable(0));
