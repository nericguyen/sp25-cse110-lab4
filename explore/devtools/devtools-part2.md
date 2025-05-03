1. The bug was that the two numbers being added were stored as string variables, so when they were being added, the + operation was using string concatenation and not number addition.
2. I fixed it by just parsing the numbers into the Number type within the adding function.  See fix.png
