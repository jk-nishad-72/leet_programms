/**1796. Second Largest Digit in a String
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let max = -1;
    let scMax = -1;
    for(let i  = 0;i<s.length;i++){

        if(s[i] >= '0' && s[i] <= '9'){
            if(s[i] > max){
                 scMax = max;
                 max = Number(s[i]);
            }else{
                if(s[i] > scMax && s[i] < max){
                    scMax = Number(s[i]);
                }
            }
        }
    }
    return scMax;
};