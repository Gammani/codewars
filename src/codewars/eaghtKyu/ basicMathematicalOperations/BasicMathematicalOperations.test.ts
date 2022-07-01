import {basicOp} from "./BasicMathematicalOperations";

let symbol1: string;
let symbol2: string;
let symbol3: string;
let symbol4: string;
let number1: number;
let number2: number;

beforeEach(() => {
    symbol1 = "+";
    symbol2 = "-";
    symbol3 = "*";
    symbol4 = "/";
    number1 = 20;
    number2 = 10;
})

test('Basic Mathematical Operations should be correct', () => {
    let result1: number = basicOp(symbol1, number1, number2);
    let result2: number = basicOp(symbol2, number1, number2);
    let result3: number = basicOp(symbol3, number1, number2);
    let result4: number = basicOp(symbol4, number1, number2);

    expect(result1).toBe(30);
    expect(result2).toBe(10);
    expect(result3).toBe(200);
    expect(result4).toBe(2);
})