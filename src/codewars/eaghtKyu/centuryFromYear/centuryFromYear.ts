export const centuryFromYear = (year: number): number => {
    return Math.floor(year / 100) + (year % 100 ? 1 : 0);
};