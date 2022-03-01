// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
// O(n2)

// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

var smallerNumbersThanCurrent = function(nums) {
    
    //make empty array to store those results
    var arr =[];
 
    //first for loop acts as index (j) for number we want to compare to the rest
    for(var j = 0; j < nums.length;j++){
        //create counter to find how many number are smaller than current number
        var counter = 0;

        //second loop acts as index (i) to give first number (j) something to compare too
        //even itself
        for (var i = 0; i < nums.length; i++){
            //if the second number nums[i] less than the first number nums[j] (i < j) add 1 to the counter 
            if (nums[j] > nums[i]){
                counter++
            }
            //this inner loops checks every number in the array to see if its less than
        }
        //save the amount of numbers less than nums[j] in a empty array
        arr.push(counter)
        //now the outer restarts, reseting counter, and starting the inner loop again to check every other number
    }
    console.log(arr)
};

smallerNumbersThanCurrent([8,1,2,2,3])
