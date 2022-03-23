//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.
//For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {

    //Convert number to array
    var comp = x.toString().split('');
    //assign pointers
    var l = 0
    var r = comp.length - 1
    //create flag
    var isPal = true
    //loop until result 
    
    //the while loop executes if l is less than r. If not, the while loop does not execute goes to the line under it.
    //this is important because if X is only one number, we need to automatically return true. 
    while(l < r){

        //Compares the first number with the last number
        //if they do not equal each other we know the number is not a palindrome and can return false
        if (comp[l] !== comp[r]){
            isPal = false
            console.log(isPal)
            //once we know it is not a plaindrome stop loopoing.
            break;
        }

        //if the number are equal to each move the pointers to check the next sent of numbers
        l++
        r--
    }

    //return true
    console.log(isPal)     
};

isPalindrome(12)
