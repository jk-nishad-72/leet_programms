class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        
        // Step 1: har child ko 1 candy
        int[] candies = new int[n];
        for(int i = 0; i < n; i++) {
            candies[i] = 1;
        }

        // Step 2: Left -> Right pass
        // agar current rating > left wale se, to candies increase karo
        for(int i = 1; i < n; i++) {
            if(ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        /*
        DRY RUN (example: [1,0,2])

        Initial:
        ratings = [1,0,2]
        candies = [1,1,1]

        Left -> Right:
        i=1 → 0 < 1 → no change → [1,1,1]
        i=2 → 2 > 0 → candies[2] = 2 → [1,1,2]
        */

        // Step 3: Right -> Left pass
        // agar current rating > right wale se, to candies fix karo
        for(int i = n - 2; i >= 0; i--) {
            if(ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }

        /*
        Continue DRY RUN:

        candies = [1,1,2]

        Right -> Left:
        i=1 → 0 < 2 → no change → [1,1,2]
        i=0 → 1 > 0 → candies[0] = max(1, 1+1) = 2 → [2,1,2]
        */

        // Step 4: sum of all candies
        int total = 0;
        for(int c : candies) {
            total += c;
        }

        return total;
    }
}