/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    

let clr = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

     let i = 0; 
     let j = clr.length-1;

     while(i <= j){

         if(clr.charAt(i) !== clr.charAt(j)){
                  return false
         }else{
             i++
             j--
         }
     }
     return true

};