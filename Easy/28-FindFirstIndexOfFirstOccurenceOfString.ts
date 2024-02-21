function strStr(haystack: string, needle: string): number {
    const arr: string = haystack;

    const arridx: number[] = [];

    let left: number = 0;
    let right: number = 0;
    let idx: number = 0;

    // Checks for null in array
    if (!haystack.includes(needle)) {        
        return -1;
    }

    // Check for less than
    if (needle.length > haystack.length) {
        return -1;
    }

    // Push indeces
    while (idx < arr.length) {
        if (arr[idx] === needle[0]) {
            arridx.push(idx)
        }
    }

    for (let i = 1; i < needle.length; i++) {
        for (let y = 0; y < arridx.length; y++) {
            if (arridx[y] > needle.length) {
                arridx.splice(y,1)
            }
            if(arr[arridx[y]] === needle[i]){
                arridx[y]++;
            } else {
                // Removing the index hehe
                arridx.splice(y,1)
            }            
        }
    }

    if (arridx.length === 0) {
        return -1;
    }



    // idx = 0;
    

    // for (let i = 0; )

    // while(left < needle.length && idx < haystack.length) {

    //     // Check for pathing
    //     if (haystack[idx] === needle[left]) {
    //         left++;
    //     } 
    //     else {
    //         left = 0;            
    //     }

    //     idx++;
    // }

    // if (idx > haystack.length) {
    //     return -1;
    // }

    return arridx[0]-needle.length;
};