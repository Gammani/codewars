import {isDivisible} from "./Is-n-DivisibleBy-x-and-y";

let value1: number;
let value2: number;
let value3: number;
let value4: number;
let value5: number;

beforeEach(() => {
    value1 = 0;
    value2 = 1;
    value3 = 2;
    value4 = 3;
    value5 = 4;
})

test("should be All inputs are positive, non-zero digits", () => {
    const result1: boolean = isDivisible(value5, value3, value2);
    const result2: boolean = isDivisible(value5, value4, value1);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})