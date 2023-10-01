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
8. [Priority Queue](#priority-queue)
9. [Binary Heaps](#binary-heaps)
10. [Hash Table](#hash-table)
11. [Dijkstra's Algorithm](#dijkstras-algorithm)

 



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
### Insertion Sort
Insertion sort iteratively sorts the list by inserting the current element into its correct position relative to previously sorted elements.

* Time complexity:
    - Best: O(n)
    - Average: O(𝑛²)
    - Worst: O(𝑛²)
### Merge Sort
Merge sort is a divide-and-conquer algorithm. It continuously divides the array until it has single element arrays, then combines them in a manner that results in a sorted array.

* Time complexity:
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(n log(n))
### Quick Sort
QuickSort is a divide-and-conquer method for sorting. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.

* Time complexity:
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(𝑛²)
## Priority Queue

A Priority Queue is an abstract data type that is similar to a normal queue but each element has a priority assigned to it. Elements with higher priority are dequeued before elements with lower priority.

* Time complexity:
    - Access: O(n)
    - Search: O(n)
    - Insertion: O(log(n))
    - Deletion: O(log(n))
## Binary Heaps

Binary Heaps are binary trees with the property that each node is less than or equal to its parent and each child node is either greater than or equal to its parent.

* Time complexity:
    - Access: O(n)
    - Search: O(n)
    - Insertion: O(log(n))
    - Deletion: O(log(n))

## Hash Table

A Hash Table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

* Time complexity:
    - Access: O(1)
    - Search: O(1) (average case)
    - Insertion: O(1) (average case)
    - Deletion: O(1) (average case)

## Radix Sort

Radix Sort is a linear sorting algorithm that sorts elements by grouping them into buckets based on different digits or significant places. It can be used to sort numbers or strings.

* Time complexity:
    - Best: O(kn)
    - Average: O(kn)
    - Worst: O(kn)

(*Replace 'k' with the maximum number of digits or significant places in the input*) 

## Dijkstra's Algorithm

Dijkstra's Algorithm is an algorithm used to find the shortest path between two nodes in a graph, particularly in graphs with non-negative edge weights. It explores the graph in a breadth-first manner, gradually expanding the shortest path from the source node to all other nodes.

* Time complexity:
    - Best: O(|E| + |V| log|V|)
    - Average: O(|E| + |V| log|V|)
    - Worst: O(|E| + |V| log|V|)


Dijkstra's Algorithm is widely used in various applications such as network routing protocols and map navigation systems.
Contributions are always welcome! 



