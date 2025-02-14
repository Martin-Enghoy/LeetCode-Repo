/*
* Given a string s and an integer k,
* return the maximum number of vowel letters in any substring of s with length k.
*
* Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
* */

function maxVowels(s: string, k: number): number {
    let ans = 0, left = 0, right = k-1, acc = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (s.length < k) {
        return ans;
    }

    for (let i = left; i <= right; i++) {
        if (vowels.includes(s[i])) {
            acc++;
        }
    }

    ans = acc;

    while (right < s.length) {
        if (vowels.includes(s[left])) {
            acc--;
        }

        if (vowels.includes(s[right+1])) {
            acc++;
        }

        if (acc > ans) {
            ans = acc;
        }

        left++;
        right++;
    }

    return ans;
}
