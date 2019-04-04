function sumItems(array) {
  let n = 0;
  // Sum all the numbers in the array
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        n += sumItems(array[i])
    } else {
      // console.log(item);
      n += array[i];
    }
  }
  return n;
}


module.exports = sumItems;

