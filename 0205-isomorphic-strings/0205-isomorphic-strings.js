/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     if (s.length !== t.length) return false;

    let mapST = {}; // s -> t
    let mapTS = {}; // t -> s

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        // CASE 1: c1 already mapped
        if (mapST[c1] !== undefined) {
            if (mapST[c1] !== c2) {
                return false; // conflict
            }
        } 
        // CASE 2: c1 not mapped yet
        else {
            // check if c2 already mapped to another char
            if (mapTS[c2] !== undefined) {
                return false; // two chars mapping to same
            }

            // create mapping both ways
            mapST[c1] = c2;
            mapTS[c2] = c1;
        }
    }

    return true;
};