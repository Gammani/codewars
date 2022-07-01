export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
    let counter = 0;
    if(arrayOfSheep) {
        for(let i = 0; i < arrayOfSheep.length; i++) {
            if(arrayOfSheep[i] === true)
                counter++;
        }
    }
    return counter;
}