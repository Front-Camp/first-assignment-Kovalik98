/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
*  max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
let arr1 =[1,2,4];
let arr2= [-1, 0];

const max = arr => {
  let max =arr[0];
  for (var i = 0; i < 10; i++)
  {
    if (arr[i]> max) {
      max=arr[i];
    }
  }

  }
return max;
};


export default max;
