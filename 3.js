function add(num1, num2) {
    if (num1 < num2) {
        [num1, num2] = [num2, num1];
    }

    let a = num1.toString().split('').reverse();
    let b = num2.toString().split('').reverse();
    let arr3 = []

    for (let i = 0; i < a.length; i++) {
        if (b[i]) {
            arr3.push(Number(a[i]) + Number(b[i]));
        } else {
            arr3.push(Number(a[i]));
        }
    }
    return Number(arr3.reverse().join(''));
}

console.log(add(16, 18));    
console.log(add(26, 39));
console.log(add(122, 81));