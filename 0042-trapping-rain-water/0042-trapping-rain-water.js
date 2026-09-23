/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  let maxleft = height[0];
  let maxright = height[height.length-1];
  let left = new Array(height.length)
  let right = new Array(height.length)
  left[0] = maxleft;
  right[height.length-1] = maxright

  for(let i = 0;i<height.length;i++){
       maxleft =  Math.max(height[i],maxleft)
       left[i] = maxleft
  }
  for(let j = height.length-2;j>=0;j--){
           maxright = Math.max(height[j],maxright)
           right[j] = maxright
  }
  let ans = 0;
  for(let k = 0;k<height.length;k++){
       ans += Math.min(left[k],right[k]) - height[k]
  }
  return ans 
};