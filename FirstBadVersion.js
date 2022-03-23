/*
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the AP
*/

var solution = function(isBadVersion) {
    /*
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //pointers
        let r = n;
        let l = 0;
        while(l <= r){
            //middle pointer
            let mid = Math.floor((l+r)/2)
            let version = isBadVersion(mid);
            
            //check version if the version front of the middle version is not the same (true). 
            //This works because we know version build off each other 
            if(version !== isBadVersion(mid+1)){
                return mid+1
            //if the version in front is also false move left pointer and check everything in the second half
            }else if(version === false){
                l = mid+1
            }else{
                //if the version in front is also true move right pointer and check everything the first half
                r = mid-1
            }
      }
    };
