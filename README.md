# Data Structures and Algorithms in Javascript
This repository covers some of the most common data structures and algorithms implemented in JavaScript.
## Table of Contents

1. [Array](#array)
2. [Linked List](#linked-list)
3. [Stack](#stack)
4. [Queue](#queue)
5. [Graph](#graph)
6. [Binary Search Tree](#binary-search-tree)
7. [Sorting Algorithms](#sorting-algorithms)

## Array
Arrays are data structures that store items of the same data type. The elements are stored at contiguous memory locations allowing easy modification and retrieval of elements.

* Time complexity:
    - Access: O(1)
    - Search: O(n)
    - Insertion: O(n)
    - Deletion: O(n)

## Linked List
A Linked List is a sequence of nodes where each node points to the next one. It allows for efficient insertion and removal of elements.

* Time complexity:
    - Access: O(n)
    - Search: O(n)
    - Insertion: O(1)
    - Deletion: O(1)

## Stack
Stack is a Last-In-First-Out (LIFO) data structure. It's primarily used in scenarios where recursive data access is needed.

* Time complexity:
    - Access: O(n)
    - Search: O(n)
    - Insertion: O(1)
    - Deletion: O(1)

## Queue
Queue is a First-In-First-Out (FIFO) data structure used in scenarios where operations need to be executed in the same order as they arrive.

* Time complexity:
    - Access: O(n)
    - Search: O(n)
    - Insertion: O(1)
    - Deletion: O(1)

## Graph
Graphs are non-linear data structures consisting of nodes and edges. They're used to model many scenarios such as social networks, web pages, etc.

* Time complexity (Adjacency List representation):
    - Access: O(1)
    - Search: O(|V| + |E|)
    - Insertion: O(1)
    - Deletion: O(|V| + |E|)

## Binary Search Tree
A Binary Search Tree (BST) is a tree where the left child is smaller than the parent and the right child is greater.

* Time complexity:
    - Access: O(log(n))
    - Search: O(log(n))
    - Insertion: O(log(n))
    - Deletion: O(log(n))

## Sorting Algorithms

### Bubble Sort
Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

* Time complexity:
    - Best: O(n)
    - Average: O(𝑛²)
    - Worst: O(𝑛²)
### Selection Sort
Selection sort is a simple comparison-based algorithm. It divides the input into a sorted region and an unsorted region, repeatedly selecting the smallest (or largest) element and moving it into the sorted region.

* Time complexity:
    - Best: O(𝑛²)
    - Average: O(𝑛²)
    - Worst: O(𝑛²)

