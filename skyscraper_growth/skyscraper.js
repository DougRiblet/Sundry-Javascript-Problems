const maxIncreaseKeepingSkyline = function(grid) {

  let maxAcross = {};
  let maxDown = {};

  for (let x=0; x<grid.length; x+=1){
    maxAcross[x] = Math.max(...grid[x]);
    let downPool = 0;
    for (let y=0; y<grid.length; y+=1){
      if (grid[y][x] > downPool){
        downPool = grid[y][x];
      }
    }
    maxDown[x] = downPool;
  }

  let total = 0;

  for (let i=0; i<grid.length; i+=1){
    for (let j=0; j<grid.length; j+=1){
      total += Math.min(maxAcross[i], maxDown[j]) - grid[i][j];
    }
  }
  
  return total;
};
