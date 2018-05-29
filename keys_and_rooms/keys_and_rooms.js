const canVisitAllRooms = function(rooms) {
  // Keep track of which rooms have been visited
  let visited = [];
  for (let i=0; i<rooms.length; i+=1){
    visited[i] = false;
  }
  // Recursive helper function to visit rooms
  function visitRoom(num){
    // Base case: if room has been visited,
    // don't bother visiting again
    if (visited[num]) {
      return;
    }
    // Otherwise, mark room as visited ...
    visited[num] = true;
    // ... and use keys to visit more rooms
    for (let j=0; j<rooms[num].length; j+=1){
      visitRoom(rooms[num][j]);
    }
  }
  // Start by visiting room zero
  visitRoom(0);
  // Once the recursive visiting has completed,
  // check whether every room has been visited
  return visited.every(k => k);
};
