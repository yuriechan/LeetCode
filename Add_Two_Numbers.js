function addTwo(arr1, arr2) {
  let sum1 = addDigit(arr1);
  let sum2 = addDigit(arr2);
  let total = sum1 + sum2;
  let ans = intToArr(total);
  return ans;
}

function intToArr(total) {
  let counter = 0;
  let totalArr = [];
  while (total != 0) {
    totalArr.push(total % 10);
    total = Math.floor(total / 10);
    counter++;
  }
  return totalArr;
}

function addDigit(arr) {
  let sum = 0;
  let k = 1;
  for (let n = arr.length - 1, i = n; i >= 0; i--) {
    if (i == n) {
      sum = sum + arr[i];
    } else {
      k = k * 10;
      sum = sum + arr[i] * k;
    }
  }
  return sum;
}

console.log(addTwo([2, 4, 3], [5, 6, 4]));
