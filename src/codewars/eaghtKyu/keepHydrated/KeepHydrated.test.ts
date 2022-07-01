import {litres} from "./KeepHydrated";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 0.3;
    b = 1.8;
    c = 3.1;
})

test('drinks 0.5 litres of water per hour of cycling, rounded to the smallest value', () => {
    let result1: number = litres(a);
    let result2: number = litres(b);
    let result3: number = litres(c);

    expect(result1).toBe(0);
    expect(result2).toBe(1);
    expect(result3).toBe(2);
})