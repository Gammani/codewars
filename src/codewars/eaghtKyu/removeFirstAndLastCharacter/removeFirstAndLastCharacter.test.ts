import {removeChar} from "./removeFirstAndLastCharacter";

let str1: string;
let str2: string;


beforeEach(() => {
    str1 = 'JHelloK';
    str2 = 'SWorldL';
})

test('should be without first and last character', () => {
    const result1: string = removeChar(str1);
    const result2: string = removeChar(str2);


    expect(result1).toBe("Hello");
    expect(result2).toBe("World");
})