import {positiveSum} from "./SumOfPositive";

let arr1: Array<number>;
let arr2: number[];
let arr3: number[];
let arr4: number[];


beforeEach( () => {
    arr1 = [3, -1, 0, 2, -3];
    arr2 = [0,0];
    arr3 = [-3, -1, 0];
    arr4 = [3, 1, 0, 3, 7];
})


test('Sum should be of positive', () => {
    const result1 = positiveSum(arr1);
    const result2 = positiveSum(arr2);
    const result3 = positiveSum(arr3);
    const result4 = positiveSum(arr4);

    expect(result1).toBe(5);
    expect(result2).toBe(0);
    expect(result3).toBe(0);
    expect(result4).toBe(14);
})