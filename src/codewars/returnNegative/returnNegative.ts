export const makeNegativeValue = (num: number): number => {
    if(num !== 0){
        return -Math.abs(num);
    }else {
        return num;
    }
};

// export const makeNegative = (num: number): number => -Math.abs(num);