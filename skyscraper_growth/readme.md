In a 2 dimensional array ```grid```, each value ```grid[i][j]``` represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance.

Write a function to calculate the maximum total sum that the height of the buildings can be increased.

* 1 < ```grid.length``` = ```grid[0].length``` <= 50. In other words, every ```grid``` is a square matrix.
* All heights ```grid[i][j]``` are in the range [0, 100].
* All buildings in ```grid[i][j]``` occupy the entire grid cell: that is, they are a 1 x 1 x ```grid[i][j]``` rectangular prism.

Source: LeetCode weekly contest 77
