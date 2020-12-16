import {repeatStr} from "./stringRepeat";

let str1: string;
let str2: string;
let str3: string;

beforeEach(() => {
    str1 = "Hello";
    str2 = "123";
    str3 = "yo"
})

test('should be string repeat', () => {
let result1: string =  repeatStr(3, str1);
let result2: string =  repeatStr(1, str2);
let result3: string =  repeatStr(5, str3);

expect(result1).toBe("HelloHelloHello");
expect(result2).toBe("123");
expect(result3).toBe("yoyoyoyoyo");
})