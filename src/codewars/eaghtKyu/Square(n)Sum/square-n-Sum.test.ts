import {squareSum} from "./square-n-Sum";


let array1: Array<number>;
let array2: Array<number>;

beforeEach( () => {
    array1 = [1, 2, 0];
    array2 = [13, 2, 1];
})

test('should be Complete the square sum', () => {
    let result1: number = squareSum(array1);
    let result2: number = squareSum(array2);

    expect(result1).toBe(5);
    expect(result2).toBe(174);
})