/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */ 

var removeElement = function(nums, val) {
    
    let i = 0;
    let j = 0;
    while(j < nums.length){

          if(nums[j] !== val){
               let temp = nums[i];
               nums[i] = nums[j];
               nums[j] = temp;
               i++;
          }
          j++;
    }
    return i;

};