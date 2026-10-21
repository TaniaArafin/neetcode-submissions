
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const duplicate = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const num = board[r][c];

                if (num === '.') continue;

                const row = `${num} in row ${r}`;
                const column = `${num} in column ${c}`;
                const box = `${num} in box ${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if (duplicate.has(row) || duplicate.has(column) || duplicate.has(box)) {
                    return false;
                }

                duplicate.add(row);
                duplicate.add(column);
                duplicate.add(box);
            }
        }
        return true;


    }
}
