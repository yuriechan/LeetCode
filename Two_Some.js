/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numsArr, target) {
    let indexArr = [];
    for (let i = 0, n = numsArr.length; i < n; i++) {
        for (let j = 0, m = numsArr.length; j < m; j++) {
            if (numsArr[i] === target - numsArr[j] ) {
                indexArr.push(i);
                indexArr.push(j);
                return indexArr;
            }
        }
    }
   
};

console.log(twoSum([2, 7, 11, 15], 9));