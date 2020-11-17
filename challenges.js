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

// console.log(majorityElement([3, 2, 3, 2, 2, 3, 3]));
/*
Find pair of numbers that the sum equals K
First in O(n2)
Sencond in O(n)
*/
// find a + b = K
const findPairSumOn2 = (K, arr) => {
  console.time('O(n^2)');
  // K = a + b
  // edge cases
  // numbers repeat
  // greater than K
  // same number ex. 8 + 8 = 16
  const outPairs = [];
  const copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i++) {
    const n1 = copyArr[i];
    // Im going to start counting from i
    let passed = false;
    for (let j = i + 1; j < copyArr.length; j++) {
      const n2 = copyArr[j];
      if (n1 + n2 === K) {
        // console.log(`\n> n1: ${n1} i: ${i}\n> n2: ${n2} j: ${j}`);
        const remove = copyArr.indexOf(n2);
        copyArr.splice(remove, 1);
        passed = true;
        if (n1 < n2) {
          outPairs.push(`${n1}, ${n2}`);
        } else {
          outPairs.push(`${n2}, ${n1}`);
        }
      }
      if (passed) {
        const remove = copyArr.indexOf(n1);
        copyArr.splice(0, remove);
      }
    }
  }
  console.log([...new Set(outPairs)]);
  console.timeEnd('O(n^2)');
};
const findPairSumOnlogn2 = (K, arr) => {
  console.time('O(n^2)');
  // K = a + b
  // edge cases
  // numbers repeat
  // greater than K
  // same number ex. 8 + 8 = 16
  const outPairs = [];
  const copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i++) {
    const n1 = copyArr[i];
    // Im going to start counting from i
    let passed = false;
    for (let j = i + 1; j < copyArr.length; j++) {
      const n2 = copyArr[j];
      if (n1 + n2 === K) {
        // console.log(`\n> n1: ${n1} i: ${i}\n> n2: ${n2} j: ${j}`);
        const remove = copyArr.indexOf(n2);
        copyArr.splice(remove, 1);
        passed = true;
        if (n1 < n2) {
          outPairs.push(`${n1}, ${n2}`);
        } else {
          outPairs.push(`${n2}, ${n1}`);
        }
      }
      if (passed) {
        const remove = copyArr.indexOf(n1);
        copyArr.splice(0, remove);
      }
    }
  }
  console.log([...new Set(outPairs)]);
  console.timeEnd('O(n^2)');
};
// which is the same as a = K - b
// whith this we can find the pair in O(n)
const findPairSumOn = (K, arr) => {
  console.time('O(n)');
  const outPairs = [];
  const map = {};
  arr.forEach((n) => {
    let tmp = K - n;
    if (tmp > 0 && map[tmp]) {
      if (tmp < n) {
        outPairs.push(`${tmp}, ${n}`);
      } else {
        outPairs.push(`${n}, ${tmp}`);
      }
    } else {
      map[n] = 1;
    }
  });

  console.log([...new Set(outPairs)]);
  console.timeEnd('O(n)');
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

const arr = [13, 3, 13, 8, 8, 3, 3];
const builtArr = buildArr(10000, 50);
const passedArr = builtArr;
console.log(passedArr);
findPairSumOn2(16, passedArr);
findPairSumOn(16, passedArr);

// findPairSumOn(16, arr);
// // result: 6, 10 & 7, 9
// findPairSumOn(16, arr2);
// result: 5, 11 && 7, 9
