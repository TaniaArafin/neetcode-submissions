class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const s of strs) {
            result += s.length + "$" + s;
        }
        return result;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "$") {
                j++;
            }
            const length = Number(str.substring(i, j));

            const start = j + 1;
            const end = start + length;

            result.push(str.substring(start, end));
            i = end;

        }
        return result;

    }
}
