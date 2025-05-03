1. Line 12 will print out `3`, which is the value of `i`.  This is because `i` was instantiated with `var'` and is thus within
   the scope of Line 12.
2. Line 13 will print out `150`, which is the value of `discountedPrice` after the for loop terminates.  Again, this is
   because `discountedPrice` was instantiated with `var` and is thus within the scope of Line 13.
3. Line 14 will print out `150`, which is the value of `finalPrice` after the for loop terminates.  Again, this is
   because `finalPrice` was instantiated with `var` and is thus within the scope of Line 14.
4. The function will return an array of size 3 with the contents [50, 100, 150].  The function takes an input array and 
   discount number, and it returns an array with the discount subtracted from each entry in the array.  With an original array
   of [100, 200, 300], taking 0.5 from each entry results in [50, 100, 150].
5. Line 12 will return an error because the variable `i` is not defined within the scope of Line 12, since it is instantiated
   within a for loop.
6. Line 13 will return an error because the variable `discountedPrice` is not defined within the scope of Line 13, since it 
   is instantiated within a for loop.
7. Line 14 will print out `150`, which is the value of `finalPrice` after the for loop terminates.  Since it was
   instantiated within the scope of Line 14, it can be accessed and printed.
8. The function will return an array of size 3 with the contents [50, 100, 150].  The function takes an input array and 
   discount number, and it returns an array with the discount subtracted from each entry in the array.  With an original array
   of [100, 200, 300], taking 0.5 from each entry results in [50, 100, 150].
9. This function results in an error at line 7 when it attempts to declare `discountedPrice` as a `const` for a second time.
10. This function results in an error at line 7 when it attempts to declare `discountedPrice` as a `const` for a second time.
11. This function results in an error at line 7 when it attempts to declare `discountedPrice` as a `const` for a second time.

12. A. `student.name`
    
    B. `student.["Grad Year"]`

    C. `student.greeting();`

    D. `student["Favorite Teacher"].name`

    E. `student.courseLoad[0]`

13. A. `'32'` since we use string concatenation with + and 2 maps to the string '2'.
    
    B. `1` since we use number subtraction and '3' maps to the number 3.

    C. `3` since we use number addition and null maps to the number 0.

    D. `3null` since we use string concatenation and null maps to the string 'null'.

    E. `4` since we use number addition and true maps to the number 1.

    F. `0` since we use number addition and both false and null map to the number 0.

    G. `3undefined` since we use string concatenation and undefined maps to the string 'undefined'.

    H. `NaN` since we attempt to do number subtraction with an undefined value.

14. A. `true` The number mapped to the string  '2' is greater than the number value of 1.
    
    B. `false` The code compares the string letter by letter, so '2' and '1' are compared, making '2' > '12'.

    C. `true` The values map to the same number value, so they are equal.

    D. `false` The values are different types, so they are not equal.

    E. `false` The number mapped to true is 1, and 1 does not equal 2.

    F. `true` The Boolean() function returns a boolean type of true, and true is strictly equal to true.

15. == checks if two values are equal if they are converted into the same type, but === will return false if they are different types.

16. See part2-question16.js

17. The value of the function `modifyArray` will be an array of size 3 with the values [2,4,6].  We call `modifyArray` with
    an initial array of [1,2,3] and the `doSomething` function.  In `modifyArray`, we create a new array and we use a for loop
    that calls `doSomething` on each element of the initial array, which just returns each element times 2.  

18. See part2-question18.js

19. ```
    1
    4
    3
    2
    ```