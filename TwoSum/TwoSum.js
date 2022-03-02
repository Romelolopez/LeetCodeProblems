// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// O(n2)


var twoSum = function (nums, target) {
    //create empty array to hold the output
    const arr = []
    //first for loop is check the first number against every other number
    for(let i = 0; i < nums.length; i++){
        //Second loop check every number thats not i
        for(let j = i + 1 ; j < nums.length; j++){
            
            //if added together they equal the target, push to the empty array and end program.
            if(nums[i] + nums[j] === target){
               arr.push(i,j)
               break;
           }
        }
        
    }
    console.log(arr)
};

twoSum([2,7,11,15], 9)
