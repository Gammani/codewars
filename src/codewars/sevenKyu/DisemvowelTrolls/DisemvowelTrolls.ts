export function disemvowel(str: string) {

    let filteredStr = str.split('').filter(s => s !== 'a' && s !== 'e' && s !== 'i' && s !== 'o' && s !== 'u' && s !== 'A' && s !== 'E' && s !== 'I' && s !== 'O' && s !== 'U').join('')
    return filteredStr;
}


// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// disemvowel = str => str.replace(/[aeiou]/gi,'');

// function disemvowel(str) {
//     return (str || "").replace(/[aeiou]/gi, "");
// }

// function disemvowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//
//     return str.split('').filter(function(el) {
//         return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
// }

// function disemvowel(str) {
//     return str.replace(/[aeiou]/ig,'');
// }
//
// function disemvowel(str) {
//     return str.replace(/[aeiouAEUIOU]/g, '');
// }
//
// function disemvowel(string){
//     return string.replace(/[aeiouAEIOU]/g, '');
// }