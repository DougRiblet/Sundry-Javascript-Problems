
function recursivePermute(str){
  let answer = new Set();
  
  function trav(start, remain){
    if (remain.length === 1){
      answer.add(start.concat(remain));
    } else {
      for (let i=0; i<remain.length; i+=1){
        let newstart = start.concat(remain[i]);
        let newremain = remain.slice(0,i).concat(remain.slice(i+1));
        trav(newstart, newremain);
      }
    }
  }
  
  trav('', str);
  
  return answer;
};
