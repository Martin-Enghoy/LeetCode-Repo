/*
* Given an array of characters chars, compress it using the following algorithm:
* Begin with an empty string s. For each group of consecutive repeating characters in chars:
*   If the group's length is 1, append the character to s.
*   Otherwise, append the character followed by the group's length.
* The compressed string s should not be returned separately,
* but instead, be stored in the input character array chars.
* Note that group lengths that are 10 or longer will be split into
* multiple characters in chars.
*
* After you are done modifying the input array, return the new length of the array.
* You must write an algorithm that uses only constant extra space.
* */
function compress(chars: string[]): number {
    let ctr: number = 1;
    let s = '';
    let prev = '';

    if (chars.length <= 1) {
        s = chars.join();
        return s.length;
    }

    for (let i = 0; i < chars.length; i++) {
        let curr = chars[i];
        console.log('curr ', curr);
        console.log('prev ', prev);
        console.log('ans ', s);
        console.log('ctr ', ctr);
        if (prev === '') {
            s = s + curr;
            prev = curr;
            continue;
        }

        if (curr !== prev) {
            if (ctr > 1) {
                s = s + ctr.toString();
                ctr = 1;
            }
            s = s + curr;
        } else {
            ctr++;
        }

        if (i === chars.length - 1) {
            s = s + ctr.toString();
        }
        prev = curr;
    }

    console.log(s);

    return s.length;
}
