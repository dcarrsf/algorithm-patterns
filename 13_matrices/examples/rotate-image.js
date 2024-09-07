function rotateImage(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

// Usage Example
const image = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(rotateImage(image));
// Output: [[7,4,1],[8,5,2],[9,6,3]]
