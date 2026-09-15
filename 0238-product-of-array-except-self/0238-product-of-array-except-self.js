/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     let left = [];
    let right = [];

    let ans = [];

    for(let i  = 0 ;i<nums.length;i++){
        if(i=== 0) {

            left[i] = 1;
        }else {
            left[i] = left[i-1] * nums[i-1];
        }
    }

    for(let j = nums.length -1 ;j>=0 ;j--){

         if(j== nums.length-1) {
            
            right[j] = 1;

         }else{
            right[j] = right[j+1] * nums[j+1];
         }
    }

    for(let i = 0 ;i<nums.length;i++){

        ans[i] = left[i] * right[i];
    }

    console.log(ans);
    return ans;
};