import {countSheeps} from "./countingSheep";

let array1: Array<boolean>;
let array2: Array<boolean>;

beforeEach(() => {
    array1 = [true, false, false, true];
    array2 = [false, false, false, false];
})

test("should counting sheep", () => {
    let result1: number = countSheeps(array1);
    let result2: number = countSheeps(array2);

    expect(result1).toBe(2);
    expect(result2).toBe(0);
})