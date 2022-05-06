//Custom Map
// Array.prototype.customMap = function (callbackFn) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callbackFn(this[i], i, this));
//   }
//   return newArray;
// };

// const arr = new Array(1, 2, 3, 4, 5);

// const result = arr.customMap((element, index, array) => {
//   return element * 2;
// });
// console.log(result);
// console.log(arr);

//Custom Reduce
// Array.prototype.customReduce = function (callbackFn) {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         callbackFn(sum += this[i])
//     }
//     return sum
// }


// const arr = [1, 2, 3, 4, 5];

// const result = arr.customReduce(function (element) {
//     return element
// })
// console.log(result)

// const arr = [1, 2, 3, 4, 5];
// // const filtArr = arr.filter(function (element) {
// //   if (element > 3) return true;
// // });
// // console.log(filtArr);

//Custom Filter
// Array.prototype.customFilter = function (callbackFn) {
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//         if(callbackFn(this[i]) == true) {
//             newArray.push(this[i])
//         }
//     }
//     return newArray
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.customFilter(function (element) {
//     if (element > 3)
//     return true
// }))

//Custom Every
// Array.prototype.customEvery = function (callbackFn) {
//     for (let i = 0; i < this.length; i++) {
//         if(!callbackFn(this[i]))
//         return false
//     }
//     return true

// }

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.customEvery(function (element) {
//     if (element == 2)
//     return true

// }))

// //Custom Some
// Array.prototype.customSome = function (callbackFn) {
//     for (let i = 0; i < this.length; i++) {
//         if(callbackFn(this[i]))
//         return true
//     }
//     return false

// }

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.customSome(function (element) {
//     if (element == 2)
//     return true

// }))

//Custom Foreach
// Array.prototype.customForEach = function (callbackFn) {
//     for (let i = 0; i < this.length; i++) {
//         callbackFn(this[i], i, this)
//     }
// }

// const arr = [1, 2, 3, 4, 5];

// arr.customForEach((element, index, array) => {
//     console.log(element, index, array)
// })



