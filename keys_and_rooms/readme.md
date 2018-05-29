## Keys and Rooms

There are <code>N</code> rooms and you start in room <code>0</code>. Each room has a distinct number in <code>0, 1, 2, ..., N-1</code>, and each room may have some keys to access the next room.

Formally, each room <code>i</code> has a list of keys <code>rooms[i]</code>, and each key <code>rooms[i][j]</code> is an integer in <code>[0, 1, ..., N-1]</code> where <code>N = rooms.length</code>. A key <code>rooms[i][j] = v</code> opens the room with number <code>v</code>.

Initially, all the rooms start locked (except for room <code>0</code>).

You can walk back and forth between rooms freely.

Return <code>true</code> if and only if you can enter every room.

Source: [LeetCode weekly contest 86](https://leetcode.com/contest/weekly-contest-86)

