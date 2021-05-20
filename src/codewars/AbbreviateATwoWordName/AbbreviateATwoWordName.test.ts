import {abbrevName} from "./AbbreviateATwoWordName";

let name1: string;
let name2: string;
let name3: string;

beforeEach(() => {
    name1 = "Jon snow";
    name2 = "Daenerys Targaryen";
    name3 = "night King";
})


test('Abbreviate a Two Word Name', () => {
    let result1 = abbrevName(name1);
    let result2 = abbrevName(name2);
    let result3 = abbrevName(name3);

    expect(result1).toBe('J.S');
    expect(result2).toBe('D.T');
    expect(result3).toBe('N.K');
})