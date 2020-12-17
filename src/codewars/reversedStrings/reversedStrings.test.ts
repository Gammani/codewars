import {reverseString} from "./reversedStrings";

let str1: string;
let str2: string;

beforeEach( () => {
    str1 = "Hello";
    str2 = "World";
})

test('should be string reversed', () => {
    let result1: string = reverseString(str1);
    let result2: string = reverseString(str2);

    expect(result1).toBe("olleH");
    expect(result2).toBe("dlroW");
})