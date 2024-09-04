function gameOfLife(board) {
    const directions = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = 0;
            for (const [dx, dy] of directions) {
                const newI = i + dx;
                const newJ = j + dy;
                if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
                    liveNeighbors += board[newI][newJ] & 1;
                }
            }
            if (board[i][j] === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                board[i][j] |= 2;
            }
            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] |= 2;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] >>= 1;
        }
    }
}

// Usage Example
const board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
];
gameOfLife(board);
console.log(board);
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
