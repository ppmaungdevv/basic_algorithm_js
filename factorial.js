// factorial f(3) = 1 * 2 * 3 = 6, factorial of 0 & 1 are 1
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3))