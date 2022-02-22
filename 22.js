const r =[ 
 [  1 ,  2 ,  3  ] , 
 [  4 ,  5 ,  6  ] , 
 [  7 ,  8 ,  9  ] , 
]


function towelSort(a) {
    let result = [];
      a.map((m, ind) => {
        if (ind % 2 === 0) {
            result.push(...m);
        } else {
            result.push(...m.reverse());
     }     
    })
return result
}

console.log(towelSort(r));
