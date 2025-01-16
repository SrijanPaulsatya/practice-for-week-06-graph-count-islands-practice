function getNeighbors(row, col, matrix) {
  
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
  // Your code here
  let neighbors = [];

  //Top
  if (row !== 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1,col]);
  }

  //Top Left
  if ((row !== 0 && col !== 0) && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }

  //Top Right
  if ((row !== 0 && col !==matrix[0].length - 1) && matrix[row - 1][col + 1] === 1) {
    neighbors.push([row - 1, col + 1]);
  }

  //Down
  if (row !== (matrix.length - 1) && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1,col]);
  }

  //Down Right
  if ((row !== matrix.length - 1 && col !== matrix[0].length - 1) && matrix[row + 1][col + 1] === 1) {
    neighbors.push([row + 1, col + 1]);
  }

  //Down Left
  if ((row !== matrix.length - 1 && col !== 0) && matrix[row + 1][col - 1] === 1) {
    neighbors.push([row + 1, col - 1]);
  }

  //Left
  if (col !== 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  //Right
  if (col !== matrix[0].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  
  return neighbors;
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
  let visitedNodes = new Set();
  let islandCount = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let nodeIndexString = `${row},${col}`
      if (matrix[row][col] === 1 && !visitedNodes.has(nodeIndexString)) {
        islandCount += 1;
        visitedNodes.add(nodeIndexString);
        let stack = [[row, col]];

        while (stack.length > 0) {
          let currentNode = stack.pop();
          let [currentRow, currentCol] = currentNode;
          let neighbors = getNeighbors(currentRow, currentCol, matrix);

          for (let neighbor of neighbors) {
            if (!visitedNodes.has(neighbor.join(','))) {
              visitedNodes.add(neighbor.join(','));
              stack.push(neighbor);
            }
          }
        }
      }
    }
  }

  return islandCount
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
