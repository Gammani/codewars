import {makeNegativeValue} from "./returnNegative";

let value1: number;
let value2: number;
let value3: number;

beforeEach(() => {
    value1 = -3;
    value2 = 2;
    value3 = 0;
})

test('should be return negative value', () => {
    let result1: number = makeNegativeValue(value1);
    let result2: number = makeNegativeValue(value2);
    let result3: number = makeNegativeValue(value3);

    expect(result1).toBe(-3);
    expect(result2).toBe(-2);
    expect(result3).toBe(0);
})