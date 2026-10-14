/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;    let j  =0;
    let longest = 0;
    let set = new Set();
    while( j < s.length){

         if(set.has(s.charAt(j))){

             set.delete(s.charAt(i));
             i++;
         }else{
                set.add(s.charAt(j));
                longest = Math.max(longest, j - i + 1);
                j++;
         }
    }
    return longest;
};