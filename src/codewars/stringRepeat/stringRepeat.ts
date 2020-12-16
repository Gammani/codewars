export function repeatStr(n: number, s: string): string {
    let result: string = '';
    for(let i:number = 0; i < n; i++) {
        result += s;
    }
    return result;
}
//export function repeatStr (n:number, s:String):String {
//   return s.repeat(n);
// }