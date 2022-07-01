import {disemvowel} from "./DisemvowelTrolls";

let str1: string
let str2: string
let str3: string

beforeEach(() => {
    let str1 = 'Hello my friend!'
    let str2 = 'yo yo yo man'
    let str3 = 'sdr'
})

test('should work', () => {

    let str1 = 'HEllo my friend!'
    let str2 = 'yo yo yo man'
    let str3 = 'sdr LOL'

    let result1 = disemvowel(str1)
    let result2 = disemvowel(str2)
    let result3 = disemvowel(str3)

    expect(result1).toBe('Hll my frnd!')
    expect(result2).toBe('y y y mn')
    expect(result3).toBe('sdr LL')
})