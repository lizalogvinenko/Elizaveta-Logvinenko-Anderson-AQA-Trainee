It's unclear from task what is correct sequence

We can assume that the sequence is correct when:
1. all opening brackets `(` and `[` have matching closing brackets `)` and `]` respectively
2. each opening bracket must be left to closing bracket

**Lets visualize** 

```
1.  [
2.    (
3.      (
4.        (
5.          )
6.            )
7.              (
8.              )
9.            (
10.         (
11.       )
12.     )
13.   ] <<< this closing square bracket does not match opening bracket
14. ]
```

**Answer**

This sequence is incorrect.

I could assume that there is 3 way to solve this issue
1. We could change 2nd bracket to `[`
2. We could change 13th bracket to `)`
3. We could remove 2nd and 13th brackets
