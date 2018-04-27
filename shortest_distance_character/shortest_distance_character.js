let shortestToChar = function(S, C) {
  let sinceB = 10001;
  let bw = S.split('').reverse().map(function(x){
    if (x === C){
      sinceB = 0;
    } else {
      sinceB += 1;
    }
    return sinceB;
  }).reverse();
  
  let sinceF = 10001;
  return S.split('').map(function(x, i){
    if (x === C){
      sinceF = 0;
    } else {
      sinceF += 1;
    }
    return Math.min(sinceF, bw[i]);
  });
};
