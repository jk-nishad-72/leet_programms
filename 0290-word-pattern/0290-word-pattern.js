/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    if(pattern.length !== words.length) return false;
    let map = new Map();
    for(let i = 0; i < pattern.length; i++){
        let char = pattern[i];
        let word = words[i];
        if(map.has(char)){
            if(map.get(char) !== word) return false;
        } else {
            if([...map.values()].includes(word)) return false;
            map.set(char, word);
        }   
    }
    return true;
};