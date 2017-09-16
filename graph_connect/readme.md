## Determining if a graph has a solution

From CodeWars: https://www.codewars.com/kata/determining-if-a-graph-has-a-solution/javascript

In this kata, you'll have to implement a function `solve_graph(start, end, arcs)` that will return true if the end node can be reached from the start node, using 0 or more arcs. It will return false if it is not possible.

The graph is defined by a list of arcs, where each arc is an object that has two properties, `start` and `end`, representing the start and end nodes, respectively. Each arc is unidirectional, in other words it goes from a start node to an end node, and not the other way around. Note that 0 or more arcs can leave a node, and 0 or more can arrive to it.