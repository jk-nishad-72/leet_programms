class Solution {
    public int maxProfit(int[] price) {
          int minPrice = price[0];
          int maxProfit = 0;

          for(int i = 1;i<price.length;i++){

               if(price[i] < minPrice){
                   minPrice = price[i];
               }
               int curentProfit = price[i] - minPrice;

               if(maxProfit < curentProfit){
                   maxProfit = curentProfit;
               }
          }
           return  maxProfit;
    }
}