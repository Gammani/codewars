import {numberToString} from "./convertANumberToAString";

let value1: number;
let value2: number;

beforeEach(() => {
    value1 = 105;
    value2 = 0;
})

test("should be string", () => {
    let result1 = numberToString(value1);
    let result2 = numberToString(value2);

    expect(result1).toBe("105");
    expect(result2).toBe("0");
})