function twoSum(numArray, target){

    const numObject = {} //create an empty object
  
    for(let eachNum in numArray){
  
      const otherNum = target - numArray[eachNum]
  
      if(otherNum in numObject){
  
        return `${otherNum} + ${numArray[eachNum]} = ${target}`
      }
  
      numObject[numArray[eachNum]] = eachNum
  
  //adding key/value has to go after the if statement to avoid adding the same index twice.
    }
  
    return "target not found"
  }
  
  twoSum([1,2,3,4,5], 8) //output: '3 + 5 = 8'
  twoSum([1,2,3,4,5], 10) //"target not found"

  //
  const threeSum = (arr, sum) => {
    for(let i = 0; i < arr.length; i++){
       const indices = twoSum(arr, sum-arr[i]);
       if(indices !== -1 && !indices.includes(i)){
          return [i, ...indices];
       };
    };
    return -1;
 };
 console.log(threeSum(arr, 9));
 console.log(threeSum(arr, 8));
 console.log(threeSum(arr, 13));
 console.log(threeSum(arr, 23));