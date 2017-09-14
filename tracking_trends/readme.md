## Tracking Trends

You are given N data points and a fixed window size W. For each window, from left to right, find the number of upticks within the window minus the number of downticks within the window.

A window is defined as a contiguous range of data points. There will be exactly N-W+1 windows where this metric needs to be computed.

An uptick is defined as a contiguous range of indices [a,b], a < b , where each element is larger than the previous element. A downtick is similarly defined, except each element is smaller than the next.

### Guidelines:

1) Write a Node.js program which will read an input file ‘input.txt’ and output the score for each W-sized window to the console.

2) The input file will have two lines. Line 1 will contain positive integers N and W, separated by a space. Line 2 will contain a string of positive integers.

3) N can be between 1 and 199,999. W will be less than or equal to N. The integers on line 2 will range between 1 and 999,999.

4) Your solution should run in less than 30 seconds and use less than 50MB of memory with a valid input of any size (within the given constraints).

### Example:

If the input file reads:

```
5 3  
18 19 20 15 15
```

Your program should output:

```
3  
0  
-1
```

The first window has three upticks (18-19, 19-20, 18-19-20) and no downticks, so the answer is 3. The second window has one uptick (19-20) and one downtick (20-15), so the answer is 0. The third window has one downtick and no upticks, so the answer is -1.

### Files Included

My solution: track_trends.js
Sample data: input.txt
Commentary: explanation.md

