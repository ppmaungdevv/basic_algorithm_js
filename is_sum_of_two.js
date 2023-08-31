// sum of any two array values equals the target

// isSumOfTwo([1, 2, 3], 3) => true
// isSumOfTwo([1, 2, 3], 15) => false


function isSumOfTwo(arr, target) {
  // 1st solution
  // let counter = 1;

  // for(let i = 0; i <= arr.length - 1; i++) {
  //   for(let j = counter ; j <= arr.length - 1; j++) {
  //     if( target == (arr[i] + arr[j])) {
  //       return { num1: arr[i], num2: arr[j] };
  //     }
  //   }
  //   counter = counter + 1
  // }

  // 2nd solution
  let left = 0, right = arr.length - 1;

  while (left < right) {

    let sum = arr[left] + arr[right];

    if (sum === target) {
      return { input: target, num1: arr[left], num2: arr[right] };
    } else if (sum > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }

  }

  return false
}

console.log(isSumOfTwo([1, 2, 3], 3))