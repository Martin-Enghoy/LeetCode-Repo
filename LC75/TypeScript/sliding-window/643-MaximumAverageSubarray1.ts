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
