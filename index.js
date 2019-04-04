function sumItems(array) {
  let n = 0;
  // Sum all the numbers in the array
  for (item of array) {
    if (Array.isArray(item)) {
      sumItems(item);
    } else {
      // console.log(item);
      n += item;
    }
  }
  return n
}


module.exports = sumItems;


// function printItems(array) {
//   for (item of array) {
//     if (Array.isArray(item)) {
//       printItems(item);
//     } else {
//       console.log(item)
//     }
//   }
// }

//this works if just print item, but doesn't add additional items to n
// function sumItems(array) {
//   // Sum all the numbers in the array
//   let n = 0;
//   for (item of array) {
//     if (Array.isArray(item)) {
//       sumItems(item);
//     } else {
//       n += item;
//     }
//   }
//   return n;
// }