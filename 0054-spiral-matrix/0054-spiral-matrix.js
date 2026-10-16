/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     let top = 0, bottom = matrix.length-1
    let left = 0, right = matrix[0].length-1

    let ans = []
    while(top <= bottom && left <= right){

         //* left to right 

         for(let i = left; i<= right ;i++){
            ans.push(matrix[top][i])
         }
         top++
         //* top to bottom  

         for(let k = top; k<= bottom ;k++){
            ans.push(matrix[k][right])
         }
         right--

//*  right  to left 

         
         if(top <= bottom){
            for(let j = right; j>= left ;j--){
            ans.push(matrix[bottom][j])
         }
         bottom--
         }
         //*  b  to top 

         
         if(left <= right){
            for(let l = bottom; l>= top ;l--){
            ans.push(matrix[l][left])
         }
         left++
         }


    }

    return ans
};