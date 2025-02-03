/*
* Given an integer array nums,
* return true if there exists a triple of indices (i, j, k)
* such that i < j < k and nums[i] < nums[j] < nums[k].
* If no such indices exists, return false.
* */

function increasingTriplet(nums: number[]): boolean {
    const numArr: number[] = nums;
    let ans = false;

    if (numArr.length < 3) {
        return false;
    }

    let i = 0;
    let j = 1;
    let k = 2;
    while (i < j && j < k && k < numArr.length) {
        // move k right
        if (numArr[k] < numArr[j]) {
            k++;
        }

        // move j right
        if (numArr[j] < numArr[i]) {
            j++;
        }

        // move i right
        if (numArr[i] > numArr[j]){
            i++;
        }

        if (numArr[i] < numArr[j] && numArr[j] < numArr[k]) {
            ans = true;
        }
    }

    return ans;
}
