export const summation = (num: number) => {
    let result = 0;
    for (let i: number = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

// export const summation = (num:number) => num * (num + 1) / 2;