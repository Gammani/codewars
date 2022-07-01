import {digitize} from "./сonvertNumberToReversedArrayOfDigits";

let value1: number;
let value2: number;

beforeEach(() => {
    value1 = 1124;
    value2 = 1003;
})

test('should be to convert number to reversed array of digits', () => {
    let result1: number[] = digitize(value1);
    let result2: number[] = digitize(value2);

    expect(result1).toBe([4,2,1,1]);
    expect(result2).toBe([4,0,0,3]);
})