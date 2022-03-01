//arrays need to be sorted because two pointers can work O(nlogn)
var twoSum = function(nums, target) {
    nums.sort((a, b) => (a - b))
    var one = 0
    var two = nums.length - 1
   
    var arr = []
    

    while (one < two){
        //arrays need to be sorted because two pointers can work O(nlogn)
        

        var sum = nums[one] + nums[two]
        if (sum == target){
            arr.push(one, two)
            console.log(arr)
            break;
        } else if (sum < target) {
            console.log("one: " + nums[one] + " two: " + nums[two])
            console.log(sum > target)
            one++
        } else {
            console.log("1one: " + nums[one] + " two: " + nums[two])
            console.log(sum)
            two--
        }
    }
    
};

twoSum([-1,-2,-3,-4,-5], -8)
