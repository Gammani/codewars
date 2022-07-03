export function sortMyString(S: string) {
    let str1 = []
    let str2 = []

    for(let i = 0; i < S.length; i++) {
        if(i % 2 === 0) {
            str1.push(S[i])
        } else {
            str2.push(S[i])
        }
    }
    return str1.join('') + ' ' + str2.join('');
}

// const sortMyString = s => {
//     let even = s.split('').filter((v, i) => i % 2 === 0).join('')
//     let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
//     return even + ' ' + odd
// }

