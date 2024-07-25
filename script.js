const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // Check if adding num to currentSubarray will keep it within the limit n
        if (currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            // If adding num exceeds n, finalize currentSubarray and start new subarray
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    // Push the last remaining subarray
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};
