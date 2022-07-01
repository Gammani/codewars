export function squareSum(numbers: number[]): number {
    let sum: number = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]**2;
    }
    return sum;
}