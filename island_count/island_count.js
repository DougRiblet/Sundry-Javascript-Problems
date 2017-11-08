function countIslands (mapStr) {
  let ocean = mapStr.split('\n').map(row=>row.split(''));
  let count = 0;
  
  function markIsland(y,x){
    if (ocean[y][x]!=="0") {return;}
    if (ocean[y][x]==="0") {
      ocean[y][x] = "H";
      if (y!==0) { markIsland(y-1,x); }
      if (x!==0) { markIsland(y,x-1); }
      if (y!==ocean.length-1) { markIsland(y+1,x); }
      if (x!==ocean[y].length-1) { markIsland(y,x+1); }
    }
  };

  for (let y=0; y<ocean.length; y++){
    for (let x=0; x<ocean[y].length; x++){
      if (ocean[y][x]==="0"){
        count++;
        markIsland(y,x);
      }
    }
  }
  
  return count;
}
