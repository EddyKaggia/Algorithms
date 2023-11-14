/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

          15
          /\
      14 13 21
      |  |
1 2   4  12
\ /  /|\ /
 3  5 8 9
  \/ \   \
   6  7   11

pairs = [
    (1,3), (2,3), (3,6), (5,6), (5,7), (4,5),
    (15,21), (4,8), (4,9), (9,11), (14,4), (13, 12),
    (12,9), (15,13)
]

Write a function that takes this data and teh identifiers of two individuals as inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(pairs, 3, 8) => false
hasCommonAncestor(pairs, 5, 8) => true
hasCommonAncestor(pairs, 6, 8) => true
hasCommonAncestor(pairs, 6, 9) => true
hasCommonAncestor(pairs, 1, 3) => false
hasCommonAncestor(pairs, 3, 1) => false
hasCommonAncestor(pairs, 7, 11) => true
hasCommonAncestor(pairs, 6, 5) => true
hasCommonAncestor(pairs, 5, 6) => true
hasCommonAncestor(pairs, 3, 6) => true
hasCommonAncestor(pairs, 21, 11) => true

n: number of pairs in the input
*/

const hasCommonAncestor = () => {};

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4           30
 \ /   / \           \
  3   5   9   15     16
   \ / \    \ /
    6   7    12

Sample input/output (pseudodata):

pairs = [
    (5,6), (1,3), (2,3), (3,6), (15,12),
    (5,7), (4,5), (4,9), (9,12), (30, 16)
]

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Output may be in any order:

findNodesWithZeroAndOneParents(pairs) => {
    [1, 2, 4, 15, 30], // Individuals with zero known parents
    [5, 7, 9, 16]      // Individuals with exactly one parent
}

Complexity Analysis variables:

n: number of pairs in the input
*/

/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, the earliest of 6 is 14, and the earliest ancestor of 15 is 2.

          14
          |
  2       4
  |     / | \
  3   5   8  9
 / \ / \      \
15  6   7     11

Write a function that, for a given individual in our dataset, return their earliest known ancestor -- the one at the farthest distance from the input individual. If there is more than one ancestor tied for "earliest", return any one of them. If the input individual has no parents, the function should return null (or -1)

pairs1 = [
    (2,3), (3,15), (3,6), (5,6), (5,7),
    (4,5), (4,8), (4,9), (9,11), (14,4)
]

findEarliestAncestor(pairs1, 8) => 14
findEarliestAncestor(pairs1, 7) => 14
findEarliestAncestor(pairs1, 6) => 14
findEarliestAncestor(pairs1, 15) => 2
findEarliestAncestor(pairs1, 14) => null or -1
findEarliestAncestor(pairs1, 11) => 14

Additional example:

  14
  |
  2       4    1
  |     / | \ /
  3   5   8  9
 / \ / \      \
15  6   7     11

pairs2 = [
    (2,3), (3,15), (3,6), (5,6), (5,7),
    (4,5), (4,8), (4,9), (9,11), (14,2), (1,9)
]

findEarliestAncestor(pairs2, 8) => 4
findEarliestAncestor(pairs2, 7) => 4
findEarliestAncestor(pairs2, 6) => 14
findEarliestAncestor(pairs2, 15) => 14
findEarliestAncestor(pairs2, 14) => null or -1
findEarliestAncestor(pairs2, 11) => 4 or 1

n: number of pairs in the input
*/
