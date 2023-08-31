function reverseArray(arr) {
  // 1st solution
  // let result = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   result.push(arr[i]);
  // }
  // return result;

  // 2nd solution , swap with temp
  let temp;
  for(let i = 1; i <= arr.length / 2; i++ ) {
    temp = arr[i - 1];
    arr[i - 1] = arr[arr.length - i];
    arr[arr.length - i] = temp;
  }
  return arr;

  // 3rd solution, swap without temp (only for nums)
  // for(let i = 1; i <= arr.length / 2; i++ ) {
  //   arr[i - 1] = arr[i - 1] + arr[arr.length - i];
  //   arr[arr.length - i] = arr[i - 1] - arr[arr.length - i];
  //   arr[i - 1] = arr[i - 1] - arr[arr.length - i];
  // }
  // return arr;
}

console.log(reverseArray([1, 2, 4, 11, 5]));