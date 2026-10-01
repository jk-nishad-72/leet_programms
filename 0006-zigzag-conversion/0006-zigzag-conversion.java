class Solution {
    public String convert(String s, int numRows) {
        // Edge case
        if (numRows == 1 || s.length() <= numRows) return s;

        StringBuilder ans = new StringBuilder();
        int cycleLen = 2 * numRows - 2;

        // iterate row by row
        for (int row = 0; row < numRows; row++) {

            for (int j = row; j < s.length(); j += cycleLen) {

                // vertical character
                ans.append(s.charAt(j));

                // diagonal character (for middle rows only)
                int diagIndex = j + cycleLen - 2 * row;
                if (row != 0 && row != numRows - 1 && diagIndex < s.length()) {
                    ans.append(s.charAt(diagIndex));
                }
            }
        }

        return ans.toString();
    }
}