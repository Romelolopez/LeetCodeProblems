//BETTER THAN MY ORIGINAL ANSWER (FROM DISCUSSION BOARD)
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function(nums, n) {
    var arr = []
    var u = n
    var p = 0

    //Because the problem told us the length was 2n
    for (var i = 0; i < 2 * n; i++){
        //if i is a even number
        if(i%2 == 0){
            //adds 0,2,4,6 index to arr
            arr[i] = nums[p]
            //increase to get next number
            p++
        } else {
            //counts by three and adds that index to arr
            arr[i] = nums[u]
            //increase to get next number
            u++
        }
    }

    
    console.log(arr)
};

shuffle([2,5,1,3,4,7], 3)
