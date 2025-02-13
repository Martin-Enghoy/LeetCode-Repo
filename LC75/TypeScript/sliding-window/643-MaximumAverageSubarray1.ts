/*
* You are given an integer array nums consisting of n elements, and an integer k.
*
* Find a contiguous subarray whose length is equal to k
* that has the maximum average value and return this value.
* Any answer with a calculation error less than 10-5 will be accepted.
*
* */
function findMaxAverage(nums: number[], k: number): number {
    let left = 0, right = k-1, ans = 0, acc = 0;

    if (nums.length < k) {
        return 0;
    }

    while (right < nums.length) {
        for (let i = left; i <= right; i++) {
            acc += nums[i];
        }

        if ((acc / k) > ans || ans === 0) {
            ans = acc / k;
        }

        left++;
        right++;
        acc = 0;
    }

    return ans;
}

function findMaxAverageFinal(nums: number[], k: number): number {
    let left = 0, right = k-1, ans = 0, acc = 0;

    if (nums.length < k) {
        return 0;
    }

    for (let i = left; i <= right; i++) {
        acc += nums[i];
    }

    ans = acc / k;

    while (right < nums.length) {
        acc -= nums[left];
        acc += nums[right + 1];

        if ((acc / k) > ans) {
            ans = acc / k;
        }

        left++;
        right++;
    }

    return ans;
}
