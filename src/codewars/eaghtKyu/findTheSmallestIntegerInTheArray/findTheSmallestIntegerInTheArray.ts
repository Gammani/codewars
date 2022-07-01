export function findSmallestInt(args: number[]): number {
        let result: number = args[0];
        for(let i: number = 0; i < args.length; i++) {
            if(args[i] < result) {
                result = args[i];
            }
        }
    return result;
}


// export function findSmallestInt(args: number[]): number {
//     return Math.min(...args);
// }
