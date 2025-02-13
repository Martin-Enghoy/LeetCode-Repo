/*
* You are given an integer array nums and an integer k.
*
* In one operation,you can pick two numbers from the array
* whose sum equals k and remove them from the array.
*
* Return the maximum number of operations you can perform on the array.
* */

function maxOperations(nums: number[], k: number): number {
    let pairs = 0;
    let i = 0;
    let j = 1;

    if (nums.length < 1) {
        return 0;
    }

    while (nums.length >= 2 && i < j && j < nums.length) {
        console.log('nums[i]: %d %d', nums[i], i);
        console.log('nums[j]: %d %d', nums[j], j);
        const sum = nums[i] + nums[j];
        console.log(sum);
        if (sum === k) {
            pairs++;
            nums.splice(i, 1);
            nums.splice(j-1, 1);
            i = 0;
            j = 0;
        }
        console.log('nums: ', nums);
        console.log('pairs: ', pairs);

        if (j === nums.length - 1) {
            i++;
            j = i+1;
        } else {
            j++;
        }
    }

    return pairs;
}

function maxOperationsFinal(nums: number[], k: number): number {
    nums.sort((a,b) => a-b);
    let pairs = 0;
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === k) {
            i++;
            j--;
            pairs++;
        } else if (sum > k) {
            j--;
        } else {
            i++;
        }
    }

    return pairs;
}
