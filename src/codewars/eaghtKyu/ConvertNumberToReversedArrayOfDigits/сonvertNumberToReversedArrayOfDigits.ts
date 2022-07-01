export const digitize = (n: number): number[] => {
    return [String(n).split("")].reverse().map(Number);
    // return [...n.toString()].reverse().map(Number)
};