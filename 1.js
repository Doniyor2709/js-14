// 1

// function deleteMany(map, ...keys) {
//   for (const key of keys) {
//     map.delete(key);
//   }
// }

// let obj = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4]
// ]);

// deleteMany(obj, 'a', 'c');

// console.log(obj);


// 2
// function mapSum(map) {
//   let sum = 0;
//   for (const value of map.values()) {
//     sum += value;
//   }
//   return sum;
// }

// let obj = new Map([
//   ['a', 2],
//   ['b', 5],
//   ['c', 3]
// ]);

// const result = mapSum(obj);
// console.log(result);

// 3\
// function getMapIntersection(map1, map2) {
//   const intersection = new Map();

//   for (const [key, value] of map1) {
//     if (map2.has(key)) {
//       intersection.set(key, map2.get(key));
//     }
//   }

//   for (const [key, value] of map2) {
//     if (!map1.has(key)) {
//       intersection.set(key, value);
//     }
//   }

//   return intersection;
// }

// let map1 = new Map([
//   ['apple', 1],
//   ['banana', 2],
//   ['orange', 3]
// ]);

// let map2 = new Map([
//   ['apple', 4],
//   ['orange', 5],
//   ['grape', 6]
// ]);

// const result = getMapIntersection(map1, map2);
// console.log(result);



// 5
// function setUnion(set1, set2) {
//   const union = new Set(set1);
//   for (const item of set2) {
//     union.add(item);
//   }
//   return union;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// const result = setUnion(set1, set2);
// console.log(result);


// 7

// function checkSetSubset(set1, set2) {
//   for (const item of set1) {
//     if (!set2.has(item)) {
//       return false;
//     }
//   }
//   return true;
// }

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// const result = checkSetSubset(set1, set2);
// console.log(result);

// 8
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];

// const result = removeDuplicates(arr);
// console.log(result);

// 9