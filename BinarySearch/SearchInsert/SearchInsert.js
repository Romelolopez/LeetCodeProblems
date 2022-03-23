/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function(nums, target) {
    let l = 0, r = nums.length-1, mid
    while (l <= r){
        mid = Math.floor((l + r) / 2)
        if (nums[mid] === target){
            console.log(mid)

        } else if(nums[mid] < target){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    //if the target is greater than nums[l] it belongs in its place, else it belongs in front of it
    console.log(target > nums[l] ? l + 1 : l)
};

searchInsert([1,3,5,7], 6)
