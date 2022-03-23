var pal = (x) => {
    if (x < 0){
        return false
    }

    let r = 0
    let c = x
    while (c !== 0)
    {
        console.log("before equation reversed (r) is: " + r)
        process.stdout.write("because r*10 (" + (r*10) + ") ")
        r = r*10 + c % 10
        console.log("plus c%10 (" + (c%10) +") reversed is " + r)
        console.log("after equation reversed is: " + r)
        
        
        console.log("current (c) is: " + c)
        c = Math.floor(c/10)
        console.log("after equation current is: " + c)
        
    } 

    return x === r
}

console.log(pal(12321))
