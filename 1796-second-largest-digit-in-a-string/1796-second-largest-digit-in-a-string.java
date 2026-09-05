class Solution {
    public int secondHighest(String s) {
        int max = -1;
        int second_max = -1;

         for(int i = 0;i<s.length();i++){
             if (s.charAt(i) >= '0' && s.charAt(i) <= '9'){
                 int digit = s.charAt(i) - '0';
                 if(max < digit) {
                     second_max = max ;
                     max = digit;
                 }
                 else if (digit < max && second_max < digit){
                     second_max = digit;
                 }
             }
         }
        return second_max;
    }
}