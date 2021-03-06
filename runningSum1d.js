// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
    //loop through array
    //start at one because we dont want to change the first number
    for(var i = 1; i < nums.length; i++){
        //make the current equal to itself plus the number before it
        //First loop: nums[1] = 2+1 ; nums[1] is now 3
        //Second loop: nums[2] = 3+3 ; nums[2] is now 6
        nums[i] = nums[i] + nums[i - 1] 
    }
    console.log(nums)
};

runningSum([1,2,3,4,5])
