## My Solution Explained

Each item in the array of data points (dapo) is ‘up’, ‘down’ or ‘same’ compared to the day before. Calculating the number of subranges requires finding streaks (1 or more consecutive ‘ups’, ‘downs’ or ‘sames’). My approach treats the data set as a collection of streaks, each with specific length and direction.

The number of subranges in a streak follows a simple formula. A streak of 1 has 1 subrange; a streak of 2 has 3 (1+2), a streak of 3 has 6 (1+2+3), and so on. I created a helper function getTicks to return the number of subranges for each ‘up’ or ‘down’ streak.

I use a queue data structure to keep track of the streaks in each W-sized window. The queue is an object with indices for each streak. I use variables ‘lo’ and ‘hi’ to keep track of which indices are included in the current W-sized window.

The first step is compiling the first W-sized window beginning at dapo[0]. For W=10, the window object (‘queue’) will look something like this:

{ 0: { dir: 'same', count: 1 },
  1: { dir: 'up', count: 4 },
  2: { dir: 'down', count: 2 },
  3: { dir: 'same', count: 1 },
  4: { dir: 'up', count: 2 } }

We add up the subranges for each ‘up’ or ‘down’ streak, then print the result.

Then we iterate through the array, dropping one item from the beginning of the W-sized window and adding one item at the end. We don’t recompile the queue object each time. We just decrease the count of the first streak (or delete a streak of 1 that’s no longer part of the new W-sized window), and increase the count of the last streak (or add a new streak  to the queue if the newly added item changes direction). The second window might look like:

{ 1: { dir: 'up', count: 4 },
  2: { dir: 'down', count: 2 },
  3: { dir: 'same', count: 1 },
  4: { dir: 'up', count: 3 } }

The third window might look like:

{ 1: { dir: 'up', count: 3 },
  2: { dir: 'down', count: 2 },
  3: { dir: 'same', count: 1 },
  4: { dir: 'up', count: 3 },
  5: { dir: 'down', count: 1 } }

One mathematical issue: the first item in each W-sized window does not count as an uptick or downtick because its previous day is not included in the current window. So if the first streak in a window is { dir: ‘up’, count: 4 }, then we call getTicks(3, up) to find the number of subranges. For each subsequent streak, we use the actual count.

I added one more feature for efficiency. The fourth window in this example might look like:

{ 1: { dir: 'up', count: 2 },
  2: { dir: 'down', count: 2 },
  3: { dir: 'same', count: 1 },
  4: { dir: 'up', count: 3 },
  5: { dir: 'down', count: 2 } }

The counts for the first and last indexes have changed and need to be recalculated. However, the counts for indexes 2-3-4 have not changed. They are in the middle of the window queue, and will remain unchanged until they become the low index in the window.

So, once a particular streak is no longer the high index in the window, it gets a ‘max’ property based on its direction and count. Until it becomes the low index in the window (and its count starts changing again), we can just use the ‘max’ rather than recalculate using getTicks.

{ 1: { dir: 'up', count: 2, max: 10 },
  2: { dir: 'down', count: 2, max: -3 },
  3: { dir: 'same', count: 1, max: 0 },
  4: { dir: 'up', count: 3, max: 6 },
  5: { dir: 'down', count: 2 } }

Better yet, we can keep a running total of these middle indexes. As indexes join and leave this unchanging middle, we just add or subtract their ‘max’ values from the running total.  That’s what the object ‘storeMids’ and function ‘getMidMaxes’ do. For large window sizes (say, W=365), this will save a lot of unnecessary repetition.
