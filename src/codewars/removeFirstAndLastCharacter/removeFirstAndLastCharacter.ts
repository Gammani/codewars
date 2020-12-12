export function removeChar(str: string): string {
    let arr = str.split('');
    arr.pop();
    arr.shift();
    let result = arr.join('');
    return result;
}

export const removeChar1 = (str: string): string => str.slice(1, -1)