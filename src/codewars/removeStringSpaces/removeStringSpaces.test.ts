import {noSpace} from "./removeStringSpaces";


let value1: string;
let value2: string;


beforeEach(() => {
    value1 = " Hello World! ";
    value2 = " H e l l o ";
})

test('should be return negative value', () => {
    let result1: string = noSpace(value1);
    let result2: string = noSpace(value2);

    expect(result1).toBe("HelloWorld!");
    expect(result2).toBe("Hello");
})