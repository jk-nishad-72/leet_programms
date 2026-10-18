

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var setZeroes = function(matrix) {
  let map = new Map()
  let c = 0;
     for(let i = 0;i<matrix.length;i++){
         for(let j = 0;j<matrix[i].length;j++){
             if(matrix[i][j] === 0 ){
                  map.set(c++,[i,j])
             }
         }
     }
     for(let [key , values] of map){
             let [row , col] = values  ;
           for(let k = 0;k<matrix[row].length;k++){
                      matrix[row][k] = 0
                 }
            for(let t = 0;t<matrix.length;t++){
                      matrix[t][col] = 0  
                 }   
     }
};