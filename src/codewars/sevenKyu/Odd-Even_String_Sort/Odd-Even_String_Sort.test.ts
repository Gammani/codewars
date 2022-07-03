import {sortMyString} from "./Odd-Even_String_Sort";

test('should work', () => {

    const str1 = 'COdeWArs'
    const str2 = 'yo yo YO - man'


    const result1 = sortMyString(str1)
    const result2 = sortMyString(str2)


    expect(result1).toBe('CdWr OeAs')
    expect(result2).toBe('y oY  a oy O-mn')

})