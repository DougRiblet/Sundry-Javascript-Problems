const consecutiveNumbersSum = function(N) {
  let total = 1;
  let triangular = 1;
  const checkCns = (i, t) => (N - t) % i === 0;
  
  for (let i = 2; i < N; i += 1) {
    triangular += i;
    if (triangular > N) { break }
    if (checkCns(i, triangular)) { total += 1 }
  }
  
  return total;
};
