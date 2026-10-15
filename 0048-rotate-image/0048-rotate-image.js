/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var swap = function(arr, i , j){
     let temp = arr[i][j];
     arr[i][j] = arr[j][i]
     arr[j][i] = temp;
   
     
}
var rotate = function(matrix) {

  for(let i = 0;i<matrix.length;i++){
     for(let j = i ;j<matrix[i].length;j++){
           if(i != j ) swap(matrix , i , j)
     }
  }  

  for(let k = 0;k<matrix.length;k++){

    let i = 0 , j = matrix[k].length-1;

    while(i <= j){
        let copy = matrix[k][i]
        matrix[k][i] = matrix[k][j]
        matrix[k][j] = copy
        i++
        j--
    }
  }
};
