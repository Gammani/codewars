export function noSpace(x:string):string {
    return x.replace(/\s+/g, '');
}
// return x.split('').filter(x => x !== ' ').join('');