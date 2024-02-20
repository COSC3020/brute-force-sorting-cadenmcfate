[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

// Removed the redundant call to the isSorted function within the main for loop to lower the runtime complexity. Return value for the permSort function is now [n,sorted] where n is the number of attempts/permutations that have been explored in the current function call, and sorted is a boolean value that denotes whether the array is sorted or not. Using this we can simply check if sorted is true instead of calling isSorted(a) whenever we want to check if we found the correct permutation.

Finding the runtime complexity:
At the beginning of each call of permutationSort there is a call of isSorted to check the permutation. The isSorted function has a complexity of $\Theta(n)$.
During the first call of permutationSort, the primary for loop runs $n$ times. Within the for loop there is a swapping function that has constant complexity, a recursive call to permutationSort that will handle 1 less element, and other constant time operations. Combining this we get the recurrance relation:

$$\begin{equation}T(n)=\begin{cases}1, & \text{if $n<=1$} \\
n+n*T(n-1)+C, & \text{if $n>1$}.\end{cases}\end{equation}$$

Ignoring the low order terms, we can observe that this relation works out to be $n(n-1)(n-2)...T(n-i)$.
Thus, the highest order term will be $n!$; the runtime complexity of this algorithm is $\Theta(n!)$.

The best case input for this algorithm is an already sorted algorithm, which has a complexity of $\Theta(n)$ since the algorithm will be done after one iteration of the isSorted function.

The worst case input for this algorithm is an array that looks like $[x_1,x_2,x_3,...,x_n,x_0] \text{ where } x_i\le x_{i+1}.$ Which is to say that it is a mostly sorted array, except the element that belongs in the first spot has been placed in the last spot. Examples of this can be found in comments at the bottom of the code.js file. These inputs ensure that every possible arrangement of the array are explored; The return value of the function will be exacly $n!$ for an array of length $n$ because there are $n!$ possible permutations.

If we generated permutations randomly instead of systematically, the worst case runtime complexity would be greater since there is no ensurance that a random sort will find the correct permutation. It is just as likely that we generate the same permuation repeatedly as any other permutation, giving us a theoretical asymptotic complexity of $\Theta(\infty)$. The average case of a random sort would be slightly worse since it now takes $n$ time to create a new permutation instead of constant time, giving a complexity of $\Theta(n*n!)$. Both random sort and permutationSort would have the same best case complexity of $\Theta(n)$ since they just need to check if the array is sorted once. We do not wish to use random sort in practice since there is a lack of consistency and the worst case complexity is, quite literally, the worst. 


