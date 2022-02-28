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
