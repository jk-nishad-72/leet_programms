/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr = new Array(123).fill(0)
    if(s.length != t.length ){
        return false
    }else{
    
    for(let i = 0;i<s.length;i++){
        let asci = s.charCodeAt(i)
        arr[asci] += 1;
    }
      for(let i = 0;i<t.length;i++){
        let asci = t.charCodeAt(i)
        arr[asci] -= 1;
    }
    for(let i = 0;i<arr.length;i++){
         if(arr[i] != 0){       
            return false
         }
    }
    return true
}
};