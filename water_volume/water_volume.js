function volume (heights) {
  let total = 0, valley, peakIndex;
  
  valleyFind(heights);
  if (valley === true){
    valleyFind(heights.slice(peakIndex).reverse());
  }
  
  return total;
  
  function valleyFind(m){
    let peakValue = 0, currentValley = 0;
    peakIndex = 0, valley = false;
    for (let i=1; i<m.length; i++){
      if (valley===false && m[i]<m[i-1]){
        peakIndex = i-1;
        peakValue = m[i-1];
        currentValley += peakValue - m[i];
        valley = true;
      } else if (valley===true && m[i]<peakValue){
        currentValley += peakValue - m[i];
      } else if (valley===true && m[i]>=peakValue){
        total += currentValley;
        currentValley = 0;
        valley = false;
      }
    }
  }
  
}
