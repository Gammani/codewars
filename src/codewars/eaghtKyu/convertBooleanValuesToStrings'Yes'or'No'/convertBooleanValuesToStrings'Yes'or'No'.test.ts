import {boolToWord} from "./convertBooleanValuesToStrings\'Yes\'or\'No\'";

let booleanValue1: boolean;
let booleanValue2: boolean;

beforeEach(() => {
    booleanValue1 = true;
    booleanValue2 = false;
})

test('should Convert boolean values to strings Yes or No', () => {
    let result1 = boolToWord(booleanValue1);
    let result2 = boolToWord(booleanValue2);

    expect(result1).toBe("Yes");
    expect(result2).toBe("No");
})