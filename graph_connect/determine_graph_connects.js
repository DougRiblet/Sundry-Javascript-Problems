
function solve_graph(start, end, arcs) {
  if (start === end) { return true }
    
  let already = {};
  already[start] = true;
  let queue = [start];
  
  while (queue.length > 0) {
    let curnode = queue.shift();
    for (let x=0; x<arcs.length; x++){
      if (arcs[x].start === curnode){
        if (arcs[x].end === end){ return true }
        if (!already[arcs[x].end]){
          queue.push(arcs[x].end);
          already[arcs[x].end] = true;
        }
      }
    }
  }
  
  return false;
  
}