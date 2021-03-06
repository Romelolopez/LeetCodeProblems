//Given an integer array nums of length n, you want to create an array ans of 
//length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
//Specifically, ans is the concatenation of two nums arrays.
//Return the array ans.

// Example 1:
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

var getConcatenation = function(nums) {
    //create empty array to hold numbers from nums
    var ans = []

    //since we know want to concatenate two nums arrays set counter to 2
    var counter = 2

    //outer controls how many times we do the inner loop
    for(var i = 0; i < counter; i++){
        //add all the numbers from nums to ans
        for(var j = 0; j < nums.length; j++){
            ans.push(nums[j])
        }
        
    }
    return ans
};

getConcatenation([1,2,3,4])

//Popular answer
//const getConcatenation = nums => [...nums, ...nums]
