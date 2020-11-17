let majorityElement = function (nums) {
  const keepObj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (keepObj.hasOwnProperty(num)) {
      keepObj[num]++;
    } else {
      keepObj[num] = 1;
    }
  }
  return Object.entries(keepObj).sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    return 0;
  })[0][0];
};

console.log(majorityElement([3, 2, 3, 2, 2, 3, 3]));
/*
Find pair of numbers that the sum equals K
First in O(n2)
Sencond in O(n)
*/
// find a + b = K
const findPairSumOn2 = (K, arr) => {
  console.time('on2');
  let copyArr = [...arr];
  const outPairs = [];
  for (let i = 0; i < copyArr.length; i++) {
    const n1 = copyArr[i];
    let pass = false;
    for (let j = copyArr.length; j >= 0; j--) {
      const n2 = copyArr[j];
      if (n1 + n2 === K && i !== j) {
        // copyArr.splice(copyArr.indexOf(n1), 1);
        // copyArr.splice(copyArr.indexOf(n2), 1);
        outPairs.push([n1, n2]);
        pass = true;
        break;
      }
    }
    if (pass) {
      copyArr.splice(copyArr.indexOf(n1), 1);
    }
  }
  console.log(outPairs);
  console.timeEnd('on2');
};

// which is the same as a = K - b
// whith this we can find the pair in O(n)
const findPairSumOn = (K, arr) => {
  console.time('on');
  const outPairs = [];
  const map = {};
  arr.forEach((n) => {
    let tmp = K - n;
    if (tmp > 0 && map[tmp] == 1) {
      outPairs.push([tmp, n]);
    } else {
      map[n] = 1;
    }
  });
  console.log(outPairs);
  console.timeEnd('on');
};

// Build array of random numbers
const buildArr = (n, max) => {
  const outArr = [];
  for (let i = 0; i <= n; i++) {
    const rnd = Math.floor(Math.random() * (max - 1) + 1);
    outArr.push(rnd);
  }
  return outArr;
};

const arr = [
  21,
  2,
  7,
  18,
  23,
  6,
  28,
  3,
  4,
  13,
  12,
  8,
  23,
  8,
  24,
  28,
  24,
  12,
  18,
  5,
  14,
];
const builtArr = buildArr(20, 30);
console.log(builtArr);
findPairSumOn2(16, builtArr);
findPairSumOn(16, builtArr);

// findPairSumOn(16, arr);
// // result: 6, 10 & 7, 9
// findPairSumOn(16, arr2);
// result: 5, 11 && 7, 9
