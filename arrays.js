var family = ["Jenna","Jim","Karen","Krista"]

var speed = [78,81,65,60]

var isOld = [true,false,false,true]

//.pop removes the last element in an array
family.pop()
console.log(family)
//.push adds one or more elements to the end of an array
speed.push(88)
console.log(speed)
//.shift removes the removes the first element of an array and returns the new length of the array
isOld.shift()
console.log(isOld)

// Index positions begin at zero and move updward with each element in the array
//For example I'll create an array below and call the [0] index
var exampleArray = ["Apple","Pizza","Tacos"]
console.log(exampleArray[0])
//If done correctly the output should be "Apple"
//After 0 each the index 1 and goes up one at a time for however many elements are in the array
//Since there are 3 elements in this array if I call the index of 2, it should return "Tacos"
console.log(exampleArray[2])
