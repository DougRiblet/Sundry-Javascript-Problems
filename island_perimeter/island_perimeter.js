
var islandPerimeter = function(grid) {
    let count = 0;
    
    for (let y=0; y<grid.length; y+=1){
      for (let x=0; x<grid[0].length; x+=1){
        if (grid[y][x] === 1){
          if (y === 0) {
            count += 1;
          } else if (grid[y-1][x] === 0) {
            count += 1;
          }
          if (y === grid.length - 1) {
            count += 1;
          } else if (grid[y+1][x] === 0) {
            count += 1;
          }
          if (x === 0) {
            count += 1;
          } else if (grid[y][x-1] === 0) {
            count += 1;
          }
          if (x === grid[0].length - 1) {
            count += 1;
          } else if (grid[y][x+1] === 0) {
            count += 1;
          }
        }
      }
    }
    
    return count;
};
