//1450. Number of Students Doing Homework at a Given Time
// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

 
// Example 1:
// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

var busyStudent = function(startTime, endTime, queryTime) {
    
    //Create variable to hold the amount of student studying at queryTime
    var queryCheck = 0;
 
    var i = 0
    //loop the length of any array because they both will have the same length    
    while (i < endTime.length){

        //Variable to hold the startTime of the student we currently checking
        var st = startTime[i]
        
        console.log("loop: " + (i + 1))

        //Variable to hold the endtTime of the student we currently checking
        var et = endTime[i]
        //I used a second loop to go through the time that student studied and compare it to queryTime
        while(st <= et){  
            
            //since start time(st) becomes our time tracker we compare it to queryTime, check if it ever hits 4
            if (st == queryTime){
                //if so, add that student
                queryCheck++
            }

            console.log("study time: " + st)

            //add time to the start time we can check if they continue studying till the next number
            st++            
        }

        //increase I to move on to the next student
        i++
    }

    console.log("students that studied at queryTime: " + queryCheck)
};

busyStudent([1,2,4], [3,5,6], 4)
