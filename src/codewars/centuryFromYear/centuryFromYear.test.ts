import {centuryFromYear} from "./centuryFromYear";

let centuryFromYear1: number;
let centuryFromYear2: number;
let centuryFromYear3: number

beforeEach(() => {
    centuryFromYear1 = 9;
    centuryFromYear2 = 2230;
    centuryFromYear3 = 1900;
})

test('should given a year, return the century it is in.', () => {
    let result1: number = centuryFromYear(centuryFromYear1);
    let result2: number = centuryFromYear(centuryFromYear2);
    let result3: number = centuryFromYear(centuryFromYear3);

    expect(result1).toBe(1);
    expect(result2).toBe(23);
    expect(result3).toBe(19);
})