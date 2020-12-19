import {findSmallestInt} from "./findTheSmallestIntegerInTheArray";

let arr1: Array<number>;
let arr2: Array<number>;

beforeEach(() => {
    arr1 = [2, 0, 1];
    arr2 = [10, -400, -12];
})

test('should be find the smallest integer in the array', () => {
let result1 = findSmallestInt(arr1);
let result2 = findSmallestInt(arr2);

expect(result1).toBe(0);
expect(result2).toBe(-400);
})