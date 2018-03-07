function mergeSortedArrays(sarr1, sarr2) {
  let output = [];
  let index1 = 0;
  let index2 = 0;

  while(sarr1.length > index1 && sarr2.length > index2) {
    if (sarr1[index1] < sarr2[index2]){
      output.push(sarr1[index1]);
      index1 += 1;
    } else {
      output.push(sarr2[index2]);
      index2 += 1;
    }
  }

  if (sarr1.length > index1) {
    return output.concat(sarr1.slice(index1));
  }

  return output.concat(sarr2.slice(index2));
}
