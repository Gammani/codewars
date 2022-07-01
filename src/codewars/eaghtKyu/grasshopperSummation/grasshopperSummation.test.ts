import {summation} from "./grasshopperSummation";

let someNumber1: number;
let someNumber2: number;
let someNumber3: number;

beforeEach(() => {
    someNumber1 = 7;
    someNumber2 = 1;
    someNumber3 = 0;
})

test('should be Grasshopper - Summation', () => {
    let result1 = summation(someNumber1);
    let result2 = summation(someNumber2);
    let result3 = summation(someNumber3);

    expect(result1).toBe(28);
    expect(result2).toBe(1);
    expect(result3).toBe(0);
})