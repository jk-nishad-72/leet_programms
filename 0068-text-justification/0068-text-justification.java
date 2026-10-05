class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {

        List<String> ans = new ArrayList<>();

        int i = 0;

        while (i < words.length) {

            int j = i;
            int lineLength = 0;

            // find maximum words that can fit in current line
            while (j < words.length &&
                   lineLength + words[j].length() + (j - i) <= maxWidth) {

                lineLength += words[j].length();
                j++;
            }


            int numberOfWords = j - i;
            int totalSpaces = maxWidth - lineLength;

            StringBuilder line = new StringBuilder();


            // case 1:
            // last line OR only one word
            if (j == words.length || numberOfWords == 1) {

                for (int k = i; k < j; k++) {

                    line.append(words[k]);

                    if (k < j - 1) {
                        line.append(" ");
                    }
                }

                // add remaining spaces at end
                while (line.length() < maxWidth) {
                    line.append(" ");
                }
            }


            // case 2:
            // normal justified line
            else {

                int gaps = numberOfWords - 1;

                int spacesPerGap = totalSpaces / gaps;
                int extraSpaces = totalSpaces % gaps;


                for (int k = i; k < j; k++) {

                    line.append(words[k]);

                    if (k < j - 1) {

                        int spaces = spacesPerGap;

                        // extra spaces go to left gaps
                        if (extraSpaces > 0) {
                            spaces++;
                            extraSpaces--;
                        }

                        while (spaces-- > 0) {
                            line.append(" ");
                        }
                    }
                }
            }


            ans.add(line.toString());

            // move to next line
            i = j;
        }


        return ans;
    }
}