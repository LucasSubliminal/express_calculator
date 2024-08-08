function findMean (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    } 
    let result = sum / nums.length
    return result
}

function findMedian(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    const mid = Math.floor(sortedNums.length / 2);
    
    if (sortedNums.length % 2 !== 0) {
        return sortedNums[mid];
    } else {
        return (sortedNums[mid - 1] + sortedNums[mid]) / 2;
    }
}

function findMode(nums) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    nums.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
        }
    });

    for (const num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    return modes;
}


module.exports = {
    findMean,
    findMedian,
    findMode,
  };