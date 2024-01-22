# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```


Function: fibonacciMember(index)
Input: index (the position of the desired Fibonacci number)

1. If index is less than or equal to 1:
   1.1 Return index (since Fibonacci sequence starts with 0, 1, ...)

2. Initialize variables:
   2.1 Set fibArray[0] = 0
   2.2 Set fibArray[1] = 1

3. Loop from i = 2 to index:
   3.1 Calculate fibArray[i] = fibArray[i-1] + fibArray[i-2]

4. Return fibArray[index] (the Fibonacci number at the specified index)
