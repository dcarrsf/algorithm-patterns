#  Islands (Matrix Traversal)

The Island pattern, also known as Matrix Traversal, is a problem-solving approach used for navigating and processing 2D grids or matrices. It's particularly useful for problems involving connected components in a grid, where you need to explore and manipulate groups of adjacent cells. This pattern typically employs depth-first search (DFS) or breadth-first search (BFS) algorithms to traverse the grid and perform operations on connected regions.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)

## **Examples**:
1. **[Number of Islands Problem](examples/.js)**: Count distinct connected regions in a 2D grid.
2. **[Max Area of Island Problem](examples/max-area-of-island.js)**: Find largest contiguous area of connected cells.
3. **[Flood Fill Problem](examples/flood-fill.js)**: Recursively color adjacent cells starting from given point.
4. **[Number of Closed Islands Problem](examples/number-of-closed-islands.js)**: Count regions entirely surrounded by border or other values.

### **Key observations**:

Consistencies:

1. All examples use a 2D grid/matrix as input.
2. They all employ depth-first search (DFS) for traversal.
3. Each solution modifies the input grid to mark visited cells.
4. The core logic involves checking boundaries and adjacent cells.

Differences:

1. The return value varies: count of islands, maximum area, modified grid, or count of closed islands.
2. he flood fill algorithm starts from a given point, while others iterate through the entire grid.
3. The closed island problem has an additional condition of checking if the island touches the boundary.
4. The max area of island problem accumulates a value during traversal, unlike the others which mainly count or modify.

These examples demonstrate how the Island pattern can be adapted to solve various grid-based problems, each with a unique twist on the core concept of traversing connected components in a 2D space.

## Time Comlexity

O(M * N), where M is the number of rows and N is the number of columns in the grid. This is because in the worst case, we may need to visit every cell in the grid exactly once.

**Space Complexity**:

- O(M * N) in the worst case for recursive DFS implementations due to the call stack. This occurs in scenarios where the entire grid is filled with the same value, causing the recursion to reach its maximum depth.
- O(min(M, N)) for iterative BFS or DFS implementations using a queue or stack. This is because in the worst case, the queue or stack will contain all the cells along the longer dimension of the grid.
- O(1) if we're allowed to modify the input grid in-place to mark visited cells. This approach eliminates the need for a separate visited array.

It's worth noting that some variations of these problems might require additional space for specific operations, but the general pattern follows these complexity bounds.

The efficiency of this pattern lies in its ability to process large grids by visiting each cell at most once, making it suitable for various grid-based problems in interviews and real-world applications.

## Ways to Identify

Real-World Applications:

1. **Google Maps**: Used for identifying and labeling distinct geographical features like lakes, islands, or forest areas in satellite imagery.
2. **Image Processing Software (Adobe Photoshop)**: Employed in flood fill tools or selection of contiguous areas with similar properties.
3. **Game Development (Minecraft)**: Used for generating terrain, identifying biomes, or managing resource distribution in procedurally generated worlds.
4. **Network Analysis Tools**: Applied to visualize and analyze network topologies or circuit board layouts.

Keywords:

- "Grid"
- "Matrix"
- "Island"
- "Connected components"
- "Adjacency"
- "Flood fill"
- "DFS/BFS on 2D array"
- "Contiguous region"

Characteristics:

1. The problem input is given as a 2D array or matrix.
2. The question involves finding or counting connected regions.
3. You need to process or modify groups of adjacent cells with similar properties.
4. The problem mentions "islands," "lakes," "connected areas," or similar concepts.
5. You're asked to explore or traverse a 2D space based on certain conditions.
6. The question involves expanding from a starting point to connected neighbors.

When you encounter a problem with these characteristics, consider applying the Island pattern using DFS or BFS to traverse and process the grid efficiently.


[Practice Questions](QUESTIONS.md) | [Examples](examples/)