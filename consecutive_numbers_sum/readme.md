## Consecutive Numbers Sum

Question: Given a positive integer N, how many ways can we write it as a sum of consecutive positive integers?

Range: 1 <= N <= 10^9

Source: [LeetCode Weekly Contest 83](https://leetcode.com/contest/weekly-contest-83)

#### Solution

This is a math problem first, then a coding problem.

There's a simple equation to determine whether a given positive integer N can be written as the sum of Y consecutive positive integers. (Hint: it involves the triangular number for Y.) Use that equation to make a helper function which returns true/false for each N/Y.

For efficiency, keep a running total of triangular numbers rather than calculate it anew for each Y. And make sure you stop calling the helper function once the triangular number for Y is greater than N.
