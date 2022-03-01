// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    //loop through array
    //start at one because we dont want to change the first number
    for(var i = 1; i < nums.length; i++){
        //make the current equal to itself plus the number before it
        nums[i] = nums[i] + nums[i - 1] 
    }
    console.log(nums)
};

runningSum([1,2,3,4,5])
