/*
Run this file from the command line using Node.js
  $ node track_trends.js

By default, the program looks for a file called 'input.txt'
in the same directory. To use a different file and/or path,
add that as an argument
  $ node track_trends.js anotherInput.txt
  $ node track_trends.js /path/to/someInput.txt

This repo contains a sample 'input.txt' file for demonstration.
*/

const fs = require('fs');

let inputFile = process.argv[2] || 'input.txt';

function windowSubranges(n, k, dapo){
  // Keep track of 'up', 'down' and 'same' streaks within window
  // Variables 'lo' and 'hi' track indexes included in current window
  // First datum treated as 'same' streak of 1
  let lo = 0, hi = 0, queue = {0: {'dir': 'same', 'count': 1}};
  
  // ********** HELPER FUNCTIONS **********
  
  // Helper function to calculate total subranges for streak count
  let ticks = {0:0, 1:1, 2:3, 3:6, 4:10, 5:15, 6:21, 7:28, 8:36};
  function getTicks(streak, direction){
    if (direction === 'same') { return 0 }
    if (!ticks[streak]) {
      ticks[streak] = streak * (streak+1) / 2;
    }
    if (direction === 'up') { return ticks[streak] }
    if (direction === 'down') { return 0 - ticks[streak] }
  }
  
  // Memoize tool to avoid repeating adding max totals
  let storeMids = {'mlo': 0, 'mhi': 0, 'mtot': null};
  function getMidMaxes(midlow, midhigh){
    // If middle indexes have not changed, return stored total
    if (midlow === storeMids.mlo && midhigh === storeMids.mhi){
      return storeMids.mtot;
    }
    // If we need to calculate middle indexes from scratch
    if (midlow > storeMids.mhi){
      let newMidTotal = 0;
      for (let x=midlow; x<=midhigh; x++){
        queue[x].max = getTicks(queue[x].count, queue[x].dir);
        newMidTotal += queue[x].max;
      }
      storeMids.mlo = midlow;
      storeMids.mhi = midhigh;
      storeMids.mtot = newMidTotal;
      return storeMids.mtot;
    }
    // Otherwise
    let newMidTotal = storeMids.mtot;
    // Dump the indexes no longer part of stored middle total
    for (let x=storeMids.mlo; x<midlow; x++){
      newMidTotal -= queue[x].max;
    }
    // Add the indexes newly part of stored middle total
    for (let x=storeMids.mhi+1; x<=midhigh; x++){
      queue[x].max = getTicks(queue[x].count, queue[x].dir);
      newMidTotal += queue[x].max;
    }
    storeMids.mlo = midlow;
    storeMids.mhi = midhigh;
    storeMids.mtot = newMidTotal;
    return storeMids.mtot;
  }
  
  // Helper function to print answer for current window
  function printCurrent(low, high, obj){
    let total = 0;
    // Calculate ticks for lowest index in queue
    total += getTicks(obj[low].count-1, obj[low].dir);
    // Calculate ticks for highest index in queue
    if (low < high) {
      total += getTicks(obj[high].count, obj[high].dir);
    }
    // Find or calculate ticks for middle indexes in queue
    if (high - low > 1){
      total += getMidMaxes(low+1, high-1);
    }
    console.log(total);
    return;
  }
  
  // ****** END HELPER FUNCTIONS **********

  // Set initial values for window 0 through k-1
  for (let i=1; i<k; i++){
    let curdir = dapo[i] > dapo[i-1] ? 'up' : dapo[i] < dapo[i-1] ? 'down' : 'same';
    if (curdir === queue[hi].dir){
      queue[hi].count += 1;
    } else {
      queue[hi+1] = {dir: curdir, count: 1};
      hi += 1;
    }
  }
  
  // Print the first answer
  printCurrent(lo, hi, queue);
  
  // Iterate through AHSP array, changing window and printing value each time
  for (let y=k; y<n; y++){
    // Add next AHSP datum to end of window
    let curdir = dapo[y] > dapo[y-1] ? 'up' : dapo[y] < dapo[y-1] ? 'down' : 'same';
    if (curdir === queue[hi].dir){
      queue[hi].count += 1;
    } else {
      queue[hi+1] = {dir: curdir, count: 1};
      hi += 1;
    }
    // Chop one AHSP datum from start of window
    queue[lo].count -= 1;
    if (queue[lo].count === 0){
      delete queue[lo];
      lo += 1;
    }
    // Print answer for this window
    printCurrent(lo, hi, queue);
  }
}

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) throw err;
  let lines = data.split('\n');
  let line0 = lines[0].split(' ').map(Number);
  let n = line0[0], k = line0[1];
  let dapo = lines[1].split(' ').map(Number);
  windowSubranges(n, k, dapo);
});
