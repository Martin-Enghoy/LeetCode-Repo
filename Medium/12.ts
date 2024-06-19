/**
 *
 * @param num - a given integer
 * @returns ans - a string of the Roman Numeral equivalent of num
 */

const numRomanPair: Map<number, string> = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
    [4, 'IV'],
    [9, 'IX'],
    [40, 'XL'],
    [90, 'XC'],
    [400, 'CD'],
    [900, 'CM']
])

const romanValues: number[] = [1000, 500, 100, 50, 10, 5, 1];
const specialCaseValues: number[] = [undefined, 900, 400, 90, 40, 9 ,4];

function intToRoman(num: number): string {
     let left = num;
     let ans = "";

     for (let i = 0; i < romanValues.length; i++) {
        let compare;

        if (left >= specialCaseValues[i]) {
            compare = specialCaseValues[i];
        } 
        else if (left >= romanValues[i]) {
            compare = romanValues[i]
        }

        if (compare) {
            const multiple = Math.floor(left / compare)
            ans += numRomanPair.get(compare).repeat(multiple)
            left -= compare * multiple;
        }    
     }
    return ans
};