/*
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/


var search = function(nums, target) {
    
        //pointers
        var l = 0, r = nums.length - 1, mid

        //loop while mid not equal to the target
        while (nums[mid] !== target) {
            
            //assign middle point before we compare its value to the target 
            //we assign it in the beginning of loop because l and r, are changing at the end of every loop 
            mid = Math.floor((l + r) / 2);
            

            if(nums[mid] == target){
                //return mid;
                console.log("found a match for: " + nums[mid] + " at index " + mid)
            }
          
            /*
            if the mid point value is less than the target, move the left pointer one index in front the mid point.
            we able to do this because the array is in ascending order. If the first mid point value is less
            than the target, it is not in the first half. vice verse
            */
          
            if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
            
        }

        return -1;

};


search([-1,0,3,5,9,12], 30)
