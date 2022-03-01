// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function(nums, n) {
    //create empty array
    var arr = []
    //loop through array
    for(var i = 0; i < nums.length;i++){
        //push by i and n (we know this based off details given)
        arr.push(nums[i])
        arr.push(nums[i + n])

        //stop loop once lengths are equal
        if (arr.length == nums.length){
            break;
        }
        
    }
    console.log(arr)
};

shuffle([2,5,1,3,4,7], 3)

//MY OWN ANSWER BUT NOT MOST EFFICIENT
