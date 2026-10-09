/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedArr = nums.sort((a,b) => a-b)
    const res = []
    for(let i=0; i<nums.length; i++){
        let l = i + 1
        let r = nums.length - 1
        while(l<r){
            if(nums[i]+nums[l]+nums[r] === 0){
                const target = [nums[i], nums[l], nums[r]]
                const hasArray = res.some(subArray => 
                    subArray.every((val, index) => val === target[index])
                );
                if(!hasArray) res.push(target)
                l++
            } else if(nums[i]+nums[l]+nums[r]<0){
                l++
            } else {
                r--
            }
        }
    }
    return res
};