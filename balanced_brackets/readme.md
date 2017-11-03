The challenge: Given a string, return true if it contains all balanced parenthesis ```()```, curly-brackets ```{}```, and square-brackets ```[]```.

This was a daily toy problem at Hack Reactor. I recently went back and reviewed my original solution ... yuck, spaghetti code and inefficient. So I did it again.

The best solution uses a stack data structure. This is a perfect use case for the stack.

Loop through the input string character by character. At each step, there are three relevant cases: (1) an open bracket of some sort, (2) a closing bracket of some sort, (3) any other character.

When you see any open bracket, push it to the stack.

When you see any closing bracket, check if it matches the most recent open bracket. If so, pop that open bracket off the stack. If not, you've found an unbalanced bracket, so return false.

When you see any other character, just ignore and keep going.

If you reach the end of the input string, that means you did not find any unbalanced brackets. One question remains: Was every open bracket closed properly?

If the stack is empty, every open bracket was eventually matched to its correct closing bracket, so return true.

If the stack is not empty, then at least one open bracket remained unclosed, so return false.

The time complexity for this solution is linear, O(n).
