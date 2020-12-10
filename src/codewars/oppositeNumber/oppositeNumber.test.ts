import {Kata} from "./oppositeNumber";

let a: number;
let b: number;

beforeEach(() => {
    a = -2;
    b = 3;
})

test('should be opposite number', () => {
    const result1: number = Kata.opposite(a);
    const result2: number = Kata.opposite(b);

    expect(result1).toBe(2);
    expect(result2).toBe(-3);
})