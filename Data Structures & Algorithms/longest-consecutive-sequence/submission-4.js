class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const numbers = new Set(nums);
        let longest = 0;

        for (const n of numbers) {

            if (!numbers.has(n - 1)) {
                let current = n;
                let length = 1;

                while (numbers.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(length, longest);

            }
            



        }
        return longest;


    }
}
