function closedIsland(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0 && dfs(grid, i, j)) {
                count++;
            }
        }
    }
    return count;
}

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return false;
    if (grid[i][j] === 1) return true;
    grid[i][j] = 1;
    let left = dfs(grid, i, j-1);
    let right = dfs(grid, i, j+1);
    let up = dfs(grid, i-1, j);
    let down = dfs(grid, i+1, j);
    return left && right && up && down;
}

// Usage Example
const grid = [
    [1,1,1,1,1,1,1,0],
    [1,0,0,0,0,1,1,0],
    [1,0,1,0,1,1,1,0],
    [1,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,0]
];
console.log(closedIsland(grid)); // Output: 2
