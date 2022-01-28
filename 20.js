function dataReverse(data) {
    let size = 8;
    let t = [];
    for (let i = 0; i < Math.ceil(data.length / size); i++) {
        t[i] = data.slice((i * size), (i * size) + size);         
    }
    let y =t.reverse()
    return ([].concat(...y));
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
    const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
    console.log(dataReverse(data1))
    // const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
    // const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
    // console.log(dataReverse(data3))

// Поток данных получен и должен быть реверсирован.

// Каждый сегмент имеет длину 8 бит, что означает, что порядок этих сегментов должен быть обратным, например:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// должно стать:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// Общее количество бит всегда будет кратно 8.

// Данные задаются в виде массива:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Примечание. В языках C и NASM вам дается третий параметр, который представляет собой количество блоков сегментов.