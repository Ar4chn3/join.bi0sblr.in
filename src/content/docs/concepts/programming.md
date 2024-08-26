---
title: Programming
description: It works on my machine
---

To exploit code that someone else has written, one must obviously know how to code. You need not be an advanced programmer, but you must be strong in your fundamentals and computational thinking.

Python is the standard for most CTF tasks - there are several essential libraries like pwntools and Z3Py, and it lets you get things done in a quick and dirty manner that's perfect for a time-constrained scenario like a CTF.

:::note[Task]
Learn the basics of Python and become accustomed to thinking in code.
:::

### Q1
Given a string(taken from the user), split it into a list of characters. Then reverse the list and convert it back to string. Eventually check whether the string is a palindrome string or not.

:::note
Solve this question in python. 
:::

Topics covered: strings, if-else, for-loop, lists, nested for-loop

:::note[Bonus] 
Check out how palindrome check is done in best time complexity
:::

### Q2
Given a array of integers, sort them in any order, and find out the second highest element. 

:::note
Solve this question in c/cpp. The highest element and second highest element shouldn't be same. 
:::

Topics covered: arrays, sorting

### Q3
Given an integer, decide whether the number is sum of square of two other integers(return true or false).

:::note
The integer is positive. Solve it in O(log n) time complexity. Solve using python/c/cpp
:::

Topics covered: binary search, two pointer approach

### Q4
Given a list of integers, find the first missing positive integer among them.

```Sample 
Input => 3,4,-1, 1
Output => 2
```

Hint: U can try sorting the list and then doing the program. Or u can explore little bit of math :).

Topics covered: math, time efficiency

### Q5
Given a string, find the ascii of the characters of the string, and store them into a list. Now from the list reconstruct the string again.

:::note
Use python to solve.
:::

Topics covered: ascii, character and int array

### Q6
Given a string, find the ascii of the characters of the string, then xor it with 0x69 and store it in a list. Now reconstruct the string again.

:::note
Use python to solve.
:::

Hint: If you try enough, every operation is reversible :)

Topics covered: ascii, xor operation.

### Q7
Rahul is smart guy, who wants to keep his text files encrypted. The way he wants it to be done is by using a technique similar to the one used in `Q6`. Given a string, he wants to store the ascii of every characters of the string into a list and then do xor operation with the keys 0x01, 0x23, 0x45, 0x67 and 0x89 in this respective order and stores everything into a new list.

:::note 
Python makes life simple :)
:::

Hint: Google is your best friend, he would never criticize you.

Topics covered: Repeated key xor.

### Q8
Rahul can be very demanding sometimes, given a key as in `Q7`, he wants to check whether its a valid key or not. The following are the conditions for a valid key.
-> Find the sum of product of the digit and its position 
-> If the sum is divisible by 11 then the key is valid else not

```sample1
Input: 0112112420
Output: Valid

Explaination: 
10*0 + 9*1 + 8*1 + 7*2 + 6*1 + 5*1 + 4*2 + 3*4 + 2*2 + 1*0 = 66
Since 66 is divisible by 11, it is valid 
```

```sample2
Input: 0112112425
Output: Invalid

Explaination: 
10*0 + 9*1 + 8*1 + 7*2 + 6*1 + 5*1 + 4*2 + 3*4 + 2*2 + 1*0 = 71
Since 71 is not divisible by 11, it is not valid 
```
