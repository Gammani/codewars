import {summation} from "./grasshopperSummation";

let someNumber1: number;
let someNumber2: number;

beforeEach(() => {
    someNumber1 = 7;
    someNumber2 = 1;
})

test('should be Grasshopper - Summation', () => {
    let result1 = summation(someNumber1);
    let result2 = summation(someNumber2);

    expect(result1).toBe(28);
    expect(result2).toBe(1);
})